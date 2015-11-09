var markup = require('../html/nice-alerts.html');

function NiceAlertView () {
  this._makeView();
  this._selectElements();
}

NiceAlertView.prototype = {
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
  }
};

module.exports = NiceAlertView;
