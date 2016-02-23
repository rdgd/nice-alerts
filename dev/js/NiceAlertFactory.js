var util = require('./util.js');
var NiceAlertController = require('./NiceAlertController.js');

// Constructing the view, setting up defaults, and setting hooks
function NiceAlertFactory () {
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
}

NiceAlertFactory.prototype = {
  create: function (userOptions) {
    function NiceAlert (options) {
      this.controller = new NiceAlertController(options);
    }

    this.options = {};
    util.extend(this.options, this.defaultOptions, userOptions);

    return new NiceAlert(this.options);
  }
};

module.exports = NiceAlertFactory;
