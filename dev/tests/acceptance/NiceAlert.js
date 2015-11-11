describe('A nice alert', function () {
  var alertTypes = ['info', 'success', 'warning', 'confirm', 'failure'];
  it('has a view which is added to the document', function () {
    var view = document.getElementById('user-alert');
    expect(view).not.toBeNull();
  });

  /*
    The class hide unsurprisngly hides the element.
    That said, this test could be better.
  */
  it('is hidden at first', function () {
    var view = document.getElementById('user-alert');
    expect(view.classList).toContain('hide');
  });

  it('can be shown', function () {
    var view = document.getElementById('user-alert');
    window.niceAlert.show({type: 'success'});
    expect(view.classList).not.toContain('hide');
  });

  it('has a default message', function () {
    var messageEl = niceAlert.view.messageContainer;
    window.niceAlert.show({type: 'success'});
    expect(messageEl.textContent).toBe(niceAlert.options.message);
  });

  it('can be given a custom message', function () {
    var view = document.getElementById('user-alert');
    var messageEl = niceAlert.view.messageContainer;
    window.niceAlert.show({ type: 'success', message: 'Testing!' });
    expect(messageEl.textContent).toBe('Testing!');
  });
});
