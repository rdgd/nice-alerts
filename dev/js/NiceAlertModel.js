function NiceAlertModel (options) {
  this.type = options.type;
  this.duration = options.duration;

  this.message = options.message;
  this.denyText = options.denyText;
  this.confirmText = options.confirmText;
  this.hideFooter = this.type !== 'confirm';
  this._deriveContainerClassAndIcon();
}

/*
  We are deriving a different class on our container for each type of alert.
  The icon names correspond to Google Material Icons font. https://www.google.com/design/icons/
*/
NiceAlertModel.prototype = {
  _deriveContainerClassAndIcon: function () {
    // Defaults
    var className = 'message-info';
    var iconName = 'info';

    switch (this.type) {
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

    this.containerClass = className;
    this.iconText = iconName;
  }
};

module.exports = NiceAlertModel;
