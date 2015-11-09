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
    this.yesBtn = document.getElementById('btn-yes');
    this.noBtn = document.getElementById('btn-no');
    this.message = document.createElement('span');
    this.messageContainer = this.alertContainer.querySelector('.user-alert-message');
    this.closeBtn = this.alertContainer.querySelector('.close');
    this.footer = this.alertContainer.querySelector('.user-alert-footer');
  },

  _setHooks: function () {
    this.closeBtn.addEventListener('click', this.hide.bind(this));
  },

  setContainerClass: function (alertType) {
    var className;
    switch (alertType) {
      case 'success': {
        className = 'message-success';
        break;
      }
      case 'failure': {
        className = 'message-failure';
        break;
      }
      case 'confirm': {
        className = 'message-confirm';
        break;
      }
      case 'info': {
        className = 'message-info';
        break;
      }
      default: {
        className = 'message-info';
        break;
      }
    }
    this.alertContainer.setAttribute('class', className);
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
        // Set timeout here... this.options.duration
        this.hide(this.options.closeHandler);
      });
    }
  },

  makeConfirm: function () {
    this.noBtn.textContent(this.options.noText);
    this.yesBtn.textContent(this.options.yesText);

    this.yesBtn.addEventListener('click', this.handleYesClick.bind(this));
    this.noBtn.addEventListener('click', this.handleNoClick.bind(this));

    this.alertContainer.querySelectorAll('.user-alert-footer').innerHTML = confBtnWrap.outerHTML;
  },

  handleYesClick: function (e) {
    this.hide(this.options.closeHandler);
    if (this.options.yesHandler) { this.options.yesHandler(); }
  },

  handleNoClick: function (e) {
    this.hide(this.options.closeHandler);
    if (this.options.noHandler) { this.options.noHandler(); }
  },

  hide: function (callback) {
    this.alertContainer.classList.add('hide');
    if (typeof callback == 'function') { callback(); }
  }
};

window.UserAlert = new UserAlert();
