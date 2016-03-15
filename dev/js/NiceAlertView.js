var util = require('./util.js');

function NiceAlertView (viewModel) {
  this.messageText = viewModel.message;
  this.denyText = viewModel.denyText;
  this.confirmText = viewModel.confirmText;
  this.shouldHideFooter = viewModel.hideFooter;
  this.iconText = viewModel.iconText;
  this.containerClass = viewModel.containerClass;

  this._makeView();
}

NiceAlertView.prototype = {
  _makeView: function () {
    // Select existing alert
    var userAlert = document.getElementById('user-alert-wrap');

    // Create elements
    var userMessageContainer = document.createElement('section');
    var userAlertIconWrap = document.createElement('div');
    var messageTextContainer = document.createElement('div');
    var closeBtnIcon = document.createElement('i');
    var confirmBtnWrap = document.createElement('div');
    var denyBtnWrap = document.createElement('div');

    this.outerWrapper = document.createElement('div');
    this.wrapper = document.createElement('div');
    this.icon = document.createElement('i');
    this.messageContainer = document.createElement('div');
    this.closeBtn = document.createElement('div');
    this.footer = document.createElement('div');
    this.confirmBtn = document.createElement('button');
    this.denyBtn = document.createElement('button');
    this.message = document.createElement('span');
    this.message.innerHTML = this.messageText;
    this.messageContainer.appendChild(this.message);

    // Assign ID's
    this.outerWrapper.id = 'user-alert-wrap';
    this.wrapper.id = 'user-alert';
    this.confirmBtn.id = 'btn-yes';
    this.denyBtn.id = 'btn-no';

    // Add classes
    this.outerWrapper.classList.add('hide', this.containerClass);
    userMessageContainer.classList.add('user-message-container');
    userAlertIconWrap.classList.add('user-alert-icon', 'text-center');
    this.icon.classList.add('material-icons');
    messageTextContainer.classList.add('message-text-container', 'text-left');
    this.messageContainer.classList.add('user-alert-message');
    this.closeBtn.classList.add('close', 'text-right');
    closeBtnIcon.classList.add('material-icons');
    this.footer.classList.add('user-alert-footer');
    confirmBtnWrap.classList.add('btn-wrapper');
    denyBtnWrap.classList.add('btn-wrapper');
    this.confirmBtn.classList.add('btn');
    this.denyBtn.classList.add('btn');

    // Add innerHTML
    this.icon.innerHTML = this.iconText;
    closeBtnIcon.innerHTML = 'clear';
    this.denyBtn.innerHTML = this.denyText;
    this.confirmBtn.innerHTML = this.confirmText;

    // Append together all of the pieces
    this.outerWrapper.appendChild(this.wrapper);
    this.wrapper.appendChild(userMessageContainer);
    userMessageContainer.appendChild(userAlertIconWrap);
    userAlertIconWrap.appendChild(this.icon);
    userMessageContainer.appendChild(messageTextContainer);
    messageTextContainer.appendChild(this.messageContainer);
    userMessageContainer.appendChild(this.closeBtn);
    this.closeBtn.appendChild(closeBtnIcon);

    if (!this.shouldHideFooter) {
      this.wrapper.appendChild(this.footer);
      this.footer.appendChild(confirmBtnWrap);
      confirmBtnWrap.appendChild(this.confirmBtn);
      this.footer.appendChild(denyBtnWrap);
      denyBtnWrap.appendChild(this.denyBtn);
    }

    if (!userAlert) {
      document.body.appendChild(this.outerWrapper);
    } else {
      document.body.replaceChild(this.outerWrapper, userAlert);
    }
  },

  // Should use Object.defineProperty, but I don't like the way it looks aesthetically.
  isVisible: function () {
    return !this.outerWrapper.classList.contains('hide');
  }
};

module.exports = NiceAlertView;
