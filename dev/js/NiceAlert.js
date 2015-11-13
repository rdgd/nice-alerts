var util = require('./util.js');
var NiceAlertView = require('./NiceAlertView.js');

// Constructing the view, setting up defaults, and setting hooks
function NiceAlert () {
  this.view = new NiceAlertView();
  this.defaultOptions = {
    message: 'This is an alert!',
    type: 'info',
    duration: 0,
    closeHandler: null,
    confirmHandler: null,
    denyHandler: null,
    confirmText: 'Yes',
    denyText: 'No'
  };
  this._setHooks();
}

NiceAlert.prototype = {
  _setHooks: function () {
    this.view.confirmBtn.addEventListener('click', this.confirm.bind(this));
    this.view.denyBtn.addEventListener('click', this.deny.bind(this));
    this.view.closeBtn.addEventListener('click', this.hide.bind(this));
    document.addEventListener('keydown', this.trapESCKey.bind(this));
  },

  /*
    The NiceAlert class is only instantiated once. But every time a user calls they
    have to opportunity to display what appears to be and behaves like a new alert.
    I didn't want to repeatedly create and destroy a bunch of DOM.
  */
  show: function (userOptions) {
    this._setup(userOptions);
    this._show(this.options.duration);
  },

  // Handling user passed options. Manipulating DOM depending on these options.
  _setup: function (opts) {
    this.options = {};
    util.extend(this.options, this.defaultOptions, opts);

    this.view.setContainerClass(this.options.type);
    this.view.setMessage(this.options.message);

    // All the alerts only differ by icon and icon color, except for 'confirm'.
    if (this.options.type !== 'confirm') {
      this.view.hideFooter();
    } else {
      this.view.setDenyText(this.options.denyText);
      this.view.setConfirmText(this.options.confirmText);
      this.view.showFooter();
    }
  },

  // Calling this method is what really shows the view. The show() method is just for users.
  _show: function (duration) {
    if (duration === 0) {
      this.view.fadeIn();
    } else {
      var callback = function () { setTimeout(this.hide.bind(this), duration); };
      this.view.fadeIn(callback.bind(this));
    }
  },

  // Alert type 'confirm' only. When the confirm/green button is clicked.
  confirm: function (e) {
    this.hide(this.options.confirmHandler);
  },

  // Alert type 'confirm' only. When the deny/red button is clicked.
  deny: function (e) {
    this.hide(this.options.denyHandler);
  },

  hide: function (callback) {
    this.view.fadeOut(this.options.closeHandler, callback);
  },

  trapESCKey:  function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27 && this.view.isVisible()) { this.hide(); }
  }
};

module.exports = NiceAlert;
