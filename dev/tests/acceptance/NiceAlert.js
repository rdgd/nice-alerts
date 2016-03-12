describe('A nice alert', function () {
  it('can be shown', function () {
    niceAlert.show({ type: 'success' });
    var view = document.getElementById('user-alert');
    expect(window.getComputedStyle(view).opacity).not.toBe(0);
  });

  it('has a default message', function () {
    window.niceAlert.show({ type: 'success' });
    var messageEl = document.querySelector('.user-alert-message');

    expect(messageEl.textContent).toBe('This is an alert!');
  });

  it('can be given a custom message', function () {
    window.niceAlert.show({ type: 'success', message: 'Testing!' });
    var view = document.getElementById('user-alert');
    var messageEl = document.querySelector('.user-alert-message');

    expect(messageEl.textContent).toBe('Testing!');
  });

  describe('A success alert', function () {
    it('has a check mark icon', function () {
      window.niceAlert.show({ type: 'success' });
      var icon = document.querySelector('.user-alert-icon i');
      expect(icon.classList).toContain('material-icons');
      expect(icon.textContent).toBe('check_circle');
    });
  });

  describe('An info alert', function () {
    it('has an "i" info icon', function () {
      window.niceAlert.show({ type: 'info' });
      var icon = document.querySelector('.user-alert-icon i');
      expect(icon.classList).toContain('material-icons');
      expect(icon.textContent).toBe('info');
    });
  });

  describe('A warning alert', function () {
    it('has an exclamation mark in a triangle icon', function () {
      window.niceAlert.show({ type: 'warning' });
      var icon = document.querySelector('.user-alert-icon i');
      expect(icon.classList).toContain('material-icons');
      expect(icon.textContent).toBe('warning');
    });
  });

  describe('A failure alert', function () {
    it('has an exclamation mark in a circle icon', function () {
      window.niceAlert.show({ type: 'failure' });
      var icon = document.querySelector('.user-alert-icon i');
      expect(icon.classList).toContain('material-icons');
      expect(icon.textContent).toBe('error');
    });
  });

  describe('A confirm alert', function () {
    it('has a communication icon', function () {
      window.niceAlert.show({ type: 'confirm' });
      var icon = document.querySelector('.user-alert-icon i');
      expect(icon.classList).toContain('material-icons');
      expect(icon.textContent).toBe('question_answer');
    });

    it('has "yes" and "no" buttons by default', function () {
      var confirmBtn = document.getElementById('btn-yes');
      var denyBtn = document.getElementById('btn-no');
      expect(confirmBtn.textContent).toBe('Yes');
      expect(denyBtn.textContent).toBe('No');
    });

    it('accepts custom values for its buttons', function () {
      window.niceAlert.show({ type: 'confirm', confirmText: 'Test, yeah', denyText: 'Ing, yeah' });
      var confirmTxt = document.getElementById('btn-yes').textContent;
      var denyTxt = document.getElementById('btn-no').textContent;

      expect(confirmTxt).toBe('Test, yeah');
      expect(denyTxt).toBe('Ing, yeah');
    });

    it('hides the alert by default when the yes button is clicked', function () {});

    it('hides the alert by default when the no button is clicked', function () {});

    it('accepts a callback to execute when the yes button is clicked', function () {});

    it('accepts a callback to execute when the no button is clicked', function () {});
  });
});
