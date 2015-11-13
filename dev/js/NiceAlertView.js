var util = require('./util.js');

function NiceAlertView () {
  this._makeView();
}

NiceAlertView.prototype = {
  /*
    Could consdier accepting some options in order to template, a better flow.
    This will require approaching the project in a different way though, as it
    implies DOM construction on more than one occaision. Fine for now.
  */
  _makeView: function () {
    // Create elements
    this.wrapper = document.createElement('div');
    var userMessageContainer = document.createElement('section');
    var userAlertIconWrap = document.createElement('div');
    this.icon = document.createElement('i');
    var messageTextContainer = document.createElement('div');
    this.messageContainer = document.createElement('div');
    this.closeBtn = document.createElement('div');
    var closeBtnIcon = document.createElement('i');
    this.footer = document.createElement('div');
    var confirmBtnWrap = document.createElement('div');
    this.confirmBtn = document.createElement('button');
    var denyBtnWrap = document.createElement('div');
    this.denyBtn = document.createElement('button');
    this.message = document.createElement('span');

    // Assign ID's
    this.wrapper.id = 'user-alert';
    this.confirmBtn.id = 'btn-yes';
    this.denyBtn.id = 'btn-no';

    // Add classes
    this.wrapper.classList.add('hide');
    userMessageContainer.classList.add('user-message-container');
    userAlertIconWrap.classList.add('user-alert-icon');
    userAlertIconWrap.classList.add('text-center');
    this.icon.classList.add('material-icons');
    messageTextContainer.classList.add('message-text-container');
    messageTextContainer.classList.add('text-left');
    this.messageContainer.classList.add('user-alert-message');
    this.closeBtn.classList.add('close');
    this.closeBtn.classList.add('text-right');
    closeBtnIcon.classList.add('material-icons');
    this.footer.classList.add('user-alert-footer');
    confirmBtnWrap.classList.add('btn-wrapper');
    denyBtnWrap.classList.add('btn-wrapper');
    this.confirmBtn.classList.add('btn');
    this.denyBtn.classList.add('btn');

    // Add innerHTML
    this.icon.innerHTML = 'info';
    closeBtnIcon.innerHTML = 'clear';

    // Append together all of the pieces
    this.wrapper.appendChild(userMessageContainer);
    userMessageContainer.appendChild(userAlertIconWrap);
    userAlertIconWrap.appendChild(this.icon);
    userMessageContainer.appendChild(messageTextContainer);
    messageTextContainer.appendChild(this.messageContainer);
    userMessageContainer.appendChild(this.closeBtn);
    this.closeBtn.appendChild(closeBtnIcon);
    this.wrapper.appendChild(this.footer);
    this.footer.appendChild(confirmBtnWrap);
    confirmBtnWrap.appendChild(this.confirmBtn);
    this.footer.appendChild(denyBtnWrap);
    denyBtnWrap.appendChild(this.denyBtn);

    // Now on page
    document.body.appendChild(this.wrapper);
  },

  /*
    Each of the following two methods accepts a callback.
    We have util functions which fade elements in and out. They also accept callbacks.
    We want to pass the callback to the util fade function so that once the face is complete,
    the callback will be ran. The tricky part is, we ALSO want trigger a custom event
    at this time, so we can't just pass the callback along, and simply pasting
    the event trigger in our util sullys object scope. This is why we are passing
    an anonymous function bound to the NiceAlertView class context, and then passing
    our callback as an arg after specifying the context. EEK.
  */
  fadeIn: function (callback) {
    util.fadeIn(this.wrapper, function (callback) {
      document.triggerCustomEvent('nice:shown', { target: this.wrapper });
      if (callback) { callback(); }
    }.bind(this, callback));
  },

  fadeOut: function (callback) {
    var callbacks = arguments;
    util.fadeOut(this.wrapper, function (callbacks) {
      document.triggerCustomEvent('nice:hidden', { target: this.wrapper });
      for (var i = 0; i < callbacks.length; i++) {
        if (callbacks[i] && typeof callbacks[i] === 'function') { callbacks[i](); }
      }
    }.bind(this, callbacks));
  },

  setMessage: function (msg) {
    this.messageContainer.innerHTML = '';
    this.message.innerHTML = msg;
    this.messageContainer.appendChild(this.message);
  },

  setConfirmText: function (txt) {
    this.confirmBtn.textContent = txt;
  },

  setDenyText: function (txt) {
    this.denyBtn.textContent = txt;
  },

  hideFooter: function () {
    this.footer.classList.add('hide');
  },

  showFooter: function () {
    this.footer.classList.remove('hide');
  },

  // Should use Object.defineProperty, but I don't like the way it looks aesthetically.
  isVisible: function () {
    return !this.view.wrapper.classList.contains('hide');
  },
  /*
    We are setting a different class on our container for each type of alert.
    The icon names correspond to Google Material Icons font. https://www.google.com/design/icons/
  */
  setContainerClass: function (alertType) {
    // Defaults
    var className = 'message-info';
    var iconName = 'info';

    switch (alertType) {
      case 'success': {
        className = 'message-success';
        iconName = 'check_circle';
        break;
      }
      case 'failure': {
        className = 'message-failure';
        iconName = 'error';
        break;
      }
      case 'warning': {
        className = 'message-warning';
        iconName = 'warning';
        break;
      }
      case 'confirm': {
        className = 'message-confirm';
        iconName = 'question_answer';
        break;
      }
      case 'info': { break; }
      default: { break; }
    }
    this.wrapper.setAttribute('class', className);
    this.icon.textContent = iconName;
  }
};

module.exports = NiceAlertView;
