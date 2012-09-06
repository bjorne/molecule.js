module.exports = function($, fn) {
  var $remote1 = $({ type: 'Nexa1Remote' });
  var $remote2 = $({ type: 'Nexa2Remote' });
  var $switch = $({ type: 'Nexa1Switch' });
  var $dimmer = $({ type: 'Nexa2Dimmer' });

  $remote1.on('button', function(unit, event) {
    if (event.buttonNumber === 0) {
      fn.step(
        function() { $switch.send('state', event.isOn); },
        fn.sleep(500),
        function() { $switch.send('state', !event.isOn); }
      );
    }
  });

  var value = 0;
  
  $remote2.on('button', function(unit, event) {
    if (event.buttonNumber === 3) {
      value += 0.1;
      if (value > 1) {
        value = 0;
      }
      console.log(value);
      $dimmer.send('absoluteDim', value);      
    }
  });
};