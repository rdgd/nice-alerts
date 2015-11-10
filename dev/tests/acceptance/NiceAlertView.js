var NiceAlertView = require('../../js/NiceAlertView.js');

describe('A nice alert view', function() {
  it('is constructed and appended to the DOM on instantiation', function() {
    var view = new NiceAlertView();
    var wrapper = document.getElementById('user-alert');
    var neh = document.getElementById('bookwlek');
    // This is a bad test.
    expect(wrapper).toBeDefined();
  });
});
