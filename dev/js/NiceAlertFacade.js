var NiceAlertFactory = require('./NiceAlertFactory.js');

function NiceAlertFacade () {
  this.factory = new NiceAlertFactory();

  this.show = function (userOptions) {
    this.factory.create(userOptions);
  };
}

module.exports = NiceAlertFacade;
