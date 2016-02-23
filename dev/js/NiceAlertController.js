var NiceAlertView = require('./NiceAlertView.js');
var NiceAlertModel = require('./NiceAlertModel.js');
var util = require('./util.js');

function NiceAlertController (options) {
  this.model = new NiceAlertModel(options);
  this.view = new NiceAlertView(this.model);

  this.denyHandler = options.denyHandler;
  this.confirmHandler = options.confirmHandler;
  this.closeHandler = options.closeHandler;

  this._setHooks();
  this._show();
}

NiceAlertController.prototype = {
  _setHooks: function () {
    this.view.confirmBtn.addEventListener('click', this.confirm.bind(this));
    this.view.denyBtn.addEventListener('click', this.deny.bind(this));
    this.view.closeBtn.addEventListener('click', this.hide.bind(this, this.closeHandler));
    document.addEventListener('keydown', this.trapESCKey.bind(this));
  },

  _show: function () {
    var callback;
    if (this.model.duration !== 0) {
      callback = function () { setTimeout(this.hide.bind(this), this.model.duration); }.bind(this);
    }

    util.fadeIn(this.view.wrapper, function (callback) {
      document.triggerCustomEvent('nice:shown', { target: this.view.wrapper });
      if (callback) { callback(); }
    }.bind(this, callback));
  },

  hide: function (callback) {
    var callbacks = arguments;
    util.fadeOut(this.view.wrapper, function (callbacks) {
      document.triggerCustomEvent('nice:hidden', { target: this.view.wrapper });
      for (var i = 0; i < callbacks.length; i++) {
        if (callbacks[i] && typeof callbacks[i] === 'function') { callbacks[i](); }
      }
    }.bind(this, callbacks));
  },

  // Alert type 'confirm' only. When the confirm/green button is clicked.
  confirm: function (e) {
    this.hide(this.confirmHandler);
  },

  // Alert type 'confirm' only. When the deny/red button is clicked.
  deny: function (e) {
    this.hide(this.denyHandler);
  },

  trapESCKey:  function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27 && this.view.isVisible()) { this.hide(this.closeHandler); }
  }
};

module.exports = NiceAlertController;
