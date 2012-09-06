module.exports = {
  step: function() {
    var fns = Array.prototype.slice.call(arguments);
    var binding = this;
    if (typeof fns[0] !== 'function') {
      binding = fns[0];
      fns = fns.slice(1, fns.length);
    }
    var current = -1;
    var next = function(result) {
      current++;
      if (current >= fns.length) {
        return result;
      }
      var result = fns[current].call(binding, next, result);
      if (fns[current].length < 1) {
        next(result);
      }
    };
    return next();
  },
  sleep: function(time) {
    return function(next) {
      setTimeout(function() {
        next();
      }, time);      
    };
  }
};