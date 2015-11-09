require('../sass/general.scss');

var util = require('./util.js');
var markup = require('../html/nice-alerts.html');

function UserAlert () {
  this.options = {};
  this._makeView();
  this._selectElements();
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

UserAlert.prototype = {
  _makeView: function () {
    this.alertContainer = document.createElement('div');
    document.body.appendChild(this.alertContainer);
    this.alertContainer.outerHTML = markup;
  },

  _selectElements: function () {
    this.alertContainer = document.getElementById('user-alert');
    this.icon = this.alertContainer.querySelector('.user-alert-icon i');
    this.yesBtn = document.getElementById('btn-yes');
    this.noBtn = document.getElementById('btn-no');
    this.message = document.createElement('span');
    this.messageContainer = this.alertContainer.querySelector('.user-alert-message');
    this.closeBtn = this.alertContainer.querySelector('.close');
    this.footer = this.alertContainer.querySelector('.user-alert-footer');
  },

  _setHooks: function () {
    this.closeBtn.addEventListener('click', this.hide.bind(this));
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  },

  handleKeydown:  function(evt) {
    var alertIsVisible = !this.alertContainer.classList.contains('hide');
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
    this.alertContainer.setAttribute('class', className);
    this.icon.textContent = iconName;
  },

  setMessage: function (msg) {
    this.messageContainer.innerHTML = '';
    this.message.innerHTML = msg;
    this.messageContainer.appendChild(this.message);
  },

  show: function (userOptions) {
    this.options = {};
    util.extend(this.options, this.defaultOptions, userOptions);
    this.setContainerClass(this.options.type);
    this.setMessage(this.options.message);

    if (this.options.type == 'confirm') {
      this.footer.classList.remove('hide');
      this.makeConfirm();
    } else {
      this.footer.classList.add('hide');
    }

    if (this.options.duration === 0) {
      this.closeBtn.classList.remove('hide');
      util.fadeIn(this.alertContainer);
    } else {
      this.closeBtn.classList.add('hide');
      util.fadeIn(this.alertContainer, function() {
        setTimeout(this.hide.bind(this, this.options.closeHandler), this.options.duration);
      });
    }
  },

  makeConfirm: function () {
    this.noBtn.textContent = this.options.noText;
    this.yesBtn.textContent = this.options.yesText;

    this.yesHandler = this.handleYesClick.bind(this);
    this.noHandler = this.handleNoClick.bind(this);

    this.yesBtn.addEventListener('click', this.yesHandler);
    this.noBtn.addEventListener('click', this.noHandler);
  },

  handleYesClick: function (e) {
    this.hide(this.options.closeHandler);
    if (this.options.yesHandler) { this.options.yesHandler(); }
    this.yesBtn.removeEventListener('click', this.yesHandler);
  },

  handleNoClick: function (e) {
    this.hide(this.options.closeHandler);
    if (this.options.noHandler) { this.options.noHandler(); }
    this.noBtn.removeEventListener('click', this.noHandler);
  },

  hide: function (callback) {
    this.alertContainer.classList.add('hide');
    if (typeof callback == 'function') { callback(); }
  }
};

window.UserAlert = new UserAlert();
