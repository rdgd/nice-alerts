require('../sass/general.scss');

var util = require('./util.js');
var NiceAlertView = require('./NiceAlertView.js');

function NiceAlert () {
  this.options = {};
  this.view = new NiceAlertView();
  this.defaultOptions = {
    message: 'This is an alert!',
    type: 'info',
    duration: 0,
    closeHandler: null,
    yesHandler: null,
    noHandler: null,
    yesText: 'Yes',
    noText: 'No'
  };

  this._setHooks();
}

NiceAlert.prototype = {
  _setHooks: function () {
    this.view.closeBtn.addEventListener('click', this.hide.bind(this));
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  },

  handleKeydown:  function(evt) {
    var alertIsVisible = !this.view.alertContainer.classList.contains('hide');
    evt = evt || window.event;
    if (evt.keyCode == 27 && alertIsVisible) {
      this.hide();
    }
  },

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
    this.view.alertContainer.setAttribute('class', className);
    this.view.icon.textContent = iconName;
  },

  setMessage: function (msg) {
    this.view.messageContainer.innerHTML = '';
    this.view.message.innerHTML = msg;
    this.view.messageContainer.appendChild(this.view.message);
  },

  show: function (userOptions) {
    this.options = {};
    util.extend(this.options, this.defaultOptions, userOptions);
    this.setContainerClass(this.options.type);
    this.setMessage(this.options.message);

    if (this.options.type == 'confirm') {
      this.view.footer.classList.remove('hide');
      this.makeConfirm();
    } else {
      this.view.footer.classList.add('hide');
    }

    if (this.options.duration === 0) {
      this.view.closeBtn.classList.remove('hide');
      util.fadeIn(this.view.alertContainer);
    } else {
      this.view.closeBtn.classList.add('hide');
      util.fadeIn(this.alertContainer, function() {
        setTimeout(this.hide.bind(this, this.options.closeHandler), this.options.duration);
      }.bind(this));
    }
  },

  makeConfirm: function () {
    this.view.noBtn.textContent = this.options.noText;
    this.view.yesBtn.textContent = this.options.yesText;

    this.yesHandler = this.handleYesClick.bind(this);
    this.noHandler = this.handleNoClick.bind(this);

    this.view.yesBtn.addEventListener('click', this.yesHandler);
    this.view.noBtn.addEventListener('click', this.noHandler);
  },

  handleYesClick: function (e) {
    this.hide(this.options.closeHandler);
    if (this.options.yesHandler) { this.options.yesHandler(); }
    this.view.yesBtn.removeEventListener('click', this.yesHandler);
  },

  handleNoClick: function (e) {
    this.hide(this.options.closeHandler);
    if (this.options.noHandler) { this.options.noHandler(); }
    this.view.noBtn.removeEventListener('click', this.noHandler);
  },

  hide: function (callback) {
    util.fadeOut(this.view.alertContainer, callback);
  }
};

window.NiceAlert = new NiceAlert();
