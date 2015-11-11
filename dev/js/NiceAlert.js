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
  // May be called many times
  _setHooks: function () {
    this.hideHandler = this.hide.bind(this);
    this.keydownHandler = this.handleKeydown.bind(this);
    document.addEventListener('keydown', this.keydownHandler);
  },

  _setConfirmHooks: function () {
    this.view.yesBtn.addEventListener('click', this.yesHandler);
    this.view.noBtn.addEventListener('click', this.noHandler);
  },
  _removeConfirmHooks: function () {
    this.view.yesBtn.removeEventListener('click', this.yesHandler);
    this.view.noBtn.removeEventListener('click', this.noHandler);
  },

  handleKeydown:  function(evt) {
    var alertIsVisible = !this.view.alertContainer.classList.contains('hide');
    evt = evt || window.event;
    if (evt.keyCode == 27 && alertIsVisible) { this.hide(); }
  },

  setMessage: function (msg) {
    this.view.messageContainer.innerHTML = '';
    this.view.message.innerHTML = msg;
    this.view.messageContainer.appendChild(this.view.message);
  },

  show: function (userOptions) {
    this.view.closeBtn.addEventListener('click', this.hideHandler);
    this.options = {};
    util.extend(this.options, this.defaultOptions, userOptions);
    this.view.setContainerClass(this.options.type);
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
      util.fadeIn(this.view.alertContainer, function() {
        setTimeout(this.hide.bind(this, this.options.closeHandler), this.options.duration);
      }.bind(this));
    }
  },

  makeConfirm: function () {
    this.view.noBtn.textContent = this.options.noText;
    this.view.yesBtn.textContent = this.options.yesText;

    this.yesHandler = this.handleYesClick.bind(this);
    this.noHandler = this.handleNoClick.bind(this);

    this._setConfirmHooks();
  },

  handleYesClick: function (e) {
    this.hide(function () {
      this.options.closeHandler();
      if (this.options.yesHandler) { this.options.yesHandler(); }
    }.bind(this));
  },

  handleNoClick: function (e) {
    this.hide(function () {
      this.options.closeHandler();
      if (this.options.noHandler) { this.options.noHandler(); }
    }.bind(this));
  },

  hide: function (callback) {
    util.fadeOut(this.view.alertContainer, callback);
    this._removeConfirmHooks();
    this.view.closeBtn.removeEventListener('click', this.hideHandler);
  }
};

module.exports = NiceAlert;
