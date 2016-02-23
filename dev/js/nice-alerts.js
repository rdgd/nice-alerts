/*
  Main point of entry for webpack. Exists primarily because of separation of style from
  code to be unit tested.
*/
require('../sass/general.scss');
var NiceAlertFacade = require('./NiceAlertFacade.js');

window.niceAlert = new NiceAlertFacade();
