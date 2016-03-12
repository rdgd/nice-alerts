window.Element.prototype.triggerCustomEvent = function (evt, data) {
  var event;
  if (window.CustomEvent) {
    event = new CustomEvent(evt, data);
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(evt, true, true, data);
  }

  this.dispatchEvent(event);
};

document.triggerCustomEvent = function (evt, data) {
  var event;
  if (window.CustomEvent) {
    event = new CustomEvent(evt, data);
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(evt, true, true, data);
  }

  document.dispatchEvent(event);
};

module.exports = {
  extend: function (out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }

      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          out[key] = arguments[i][key];
        }
      }
    }

    return out;
  },

  fadeIn: function (el, callback) {
    setTimeout(function () { el.classList.remove('hide'); }, 100);
    if (callback && typeof callback == 'function') { callback(); }
  },

  fadeOut: function (el, callback) {
    el.classList.add('hide');
    setTimeout(function () { el.classList.add('displaynone'); }, 400);
    if (callback && typeof callback == 'function') { callback(); }
  }
};
