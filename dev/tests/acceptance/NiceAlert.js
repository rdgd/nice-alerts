describe('A nice alert', function () {
  it('has a view which is added to the document', function () {
    var view = document.getElementById('user-alert');
    expect(view).not.toBeNull();
  });

  it('is hidden at first', function () {
    var view = document.getElementById('user-alert');
    var viewIsHidden = window.getComputedStyle(view).display === 'none';
    expect(viewIsHidden).toBeTruthy();
  });

  it('can be shown', function () {
    var view = document.getElementById('user-alert');
    window.niceAlert.show({ type: 'success' });
    expect(view.classList).not.toContain('hide');
  });

  it('has a default message', function () {
    var messageEl = niceAlert.view.messageContainer;
    window.niceAlert.show({ type: 'success' });
    expect(messageEl.textContent).toBe(niceAlert.options.message);
  });

  it('can be given a custom message', function () {
    var view = document.getElementById('user-alert');
    var messageEl = niceAlert.view.messageContainer;
    window.niceAlert.show({ type: 'success', message: 'Testing!' });
    expect(messageEl.textContent).toBe('Testing!');
  });

  describe('A success alert', function () {
    it('has a check mark icon', function () {
      window.niceAlert.show({ type: 'success' });
      var icon = window.niceAlert.view.icon;
      expect(icon.classList).toContain('material-icons');
      expect(icon.textContent).toBe('check_circle');
    });
  });

  describe('An info alert', function () {
    it('has an "i" info icon', function () {
      window.niceAlert.show({ type: 'info' });
      var icon = window.niceAlert.view.icon;
      expect(icon.classList).toContain('material-icons');
      expect(icon.textContent).toBe('info');
    });
  });

  describe('A warning alert', function () {
    it('has an exclamation mark in a triangle icon', function () {
      window.niceAlert.show({ type: 'warning' });
      var icon = window.niceAlert.view.icon;
      expect(icon.classList).toContain('material-icons');
      expect(icon.textContent).toBe('warning');
    });
  });

  describe('A failure alert', function () {
    it('has an exclamation mark in a circle icon', function () {
      window.niceAlert.show({ type: 'failure' });
      var icon = window.niceAlert.view.icon;
      expect(icon.classList).toContain('material-icons');
      expect(icon.textContent).toBe('error');
    });
  });

  describe('A confirm alert', function () {
    it('has a communication icon', function () {
      window.niceAlert.show({ type: 'confirm' });
      var icon = window.niceAlert.view.icon;
      expect(icon.classList).toContain('material-icons');
      expect(icon.textContent).toBe('question_answer');
    });

    it('has "yes" and "no" buttons by default', function () {
      var yesBtn = window.niceAlert.view.yesBtn;
      var noBtn = window.niceAlert.view.noBtn;
      expect(yesBtn.textContent).toBe('Yes');
      expect(noBtn.textContent).toBe('No');
    });

    it('accepts custom values for its buttons', function () {
      window.niceAlert.show({ type: 'confirm', yesText: 'Test, yeah', noText: 'Ing, yeah' });
      var yesTxt = window.niceAlert.view.yesBtn.textContent;
      var noTxt = window.niceAlert.view.noBtn.textContent;

      expect(yesTxt).toBe('Test, yeah');
      expect(noTxt).toBe('Ing, yeah');
    });

    it('hides the alert by default when the yes button is clicked', function () {});

    it('hides the alert by default when the no button is clicked', function () {});

    it('accepts a callback to execute when the yes button is clicked', function () {});

    it('accepts a callback to execute when the no button is clicked', function () {});
  });
});
