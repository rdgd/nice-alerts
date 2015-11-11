function NiceAlertView () {
  this._makeView();
}

NiceAlertView.prototype = {
  _makeView: function () {
    // Create elements
    this.alertContainer = document.createElement('div');
    var userMessageContainer = document.createElement('section');
    var userAlertIconWrap = document.createElement('div');
    this.icon = document.createElement('i');
    var messageTextContainer = document.createElement('div');
    this.messageContainer = document.createElement('div');
    this.closeBtn = document.createElement('div');
    var closeBtnIcon = document.createElement('i');
    this.footer = document.createElement('div');
    var yesBtnWrap = document.createElement('div');
    this.yesBtn = document.createElement('button');
    var noBtnWrap = document.createElement('div');
    this.noBtn = document.createElement('button');
    this.message = document.createElement('span');

    // Assign ID's
    this.alertContainer.id = 'user-alert';
    this.yesBtn.id = 'btn-yes';
    this.noBtn.id = 'btn-no';

    // Add classes
    this.alertContainer.classList.add('hide');
    userMessageContainer.classList.add('user-message-container');
    userAlertIconWrap.classList.add('user-alert-icon');
    userAlertIconWrap.classList.add('text-center');
    this.icon.classList.add('material-icons');
    messageTextContainer.classList.add('message-text-container');
    messageTextContainer.classList.add('text-left');
    this.messageContainer.classList.add('user-alert-message');
    this.closeBtn.classList.add('close');
    this.closeBtn.classList.add('text-right');
    closeBtnIcon.classList.add('material-icons');
    this.footer.classList.add('user-alert-footer');
    yesBtnWrap.classList.add('btn-wrapper');
    noBtnWrap.classList.add('btn-wrapper');
    this.yesBtn.classList.add('btn');
    this.noBtn.classList.add('btn');

    // Add innerHTML
    this.icon.innerHTML = 'info';
    closeBtnIcon.innerHTML = 'clear';

    // Append together all of the pieces
    this.alertContainer.appendChild(userMessageContainer);
    userMessageContainer.appendChild(userAlertIconWrap);
    userAlertIconWrap.appendChild(this.icon);
    userMessageContainer.appendChild(messageTextContainer);
    messageTextContainer.appendChild(this.messageContainer);
    userMessageContainer.appendChild(this.closeBtn);
    this.closeBtn.appendChild(closeBtnIcon);
    this.alertContainer.appendChild(this.footer);
    this.footer.appendChild(yesBtnWrap);
    yesBtnWrap.appendChild(this.yesBtn);
    this.footer.appendChild(noBtnWrap);
    noBtnWrap.appendChild(this.noBtn);

    // Now on page
    document.body.appendChild(this.alertContainer);
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
  }
};

module.exports = NiceAlertView;
