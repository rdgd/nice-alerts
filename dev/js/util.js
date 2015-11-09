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
    el.classList.remove('hide');
    el.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
      last = +new Date();

      if (+el.style.opacity < 1) {
        if (window.requestAnimationFrame) {
          requestAnimationFrame(tick);
        }
        setTimeout(tick, 16);
      }
    };

    tick();
    if (callback) { callback(); }
  },

  fadeOut: function (el, callback) {
    el.style.opacity = 1;
    (function fade () {
      if ((el.style.opacity -= 0.1) < 0) {
        el.classList.add('hide');
      } else {
        requestAnimationFrame(fade);
      }
    })();
    if (callback) { callback(); }
  }
};
