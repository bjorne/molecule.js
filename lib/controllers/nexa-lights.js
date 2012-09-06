module.exports = function($, fn) {
  var $remote1 = $({ type: 'Nexa1Remote' });
  var $remote2 = $({ type: 'Nexa2Remote' });
  var $switch1 = $({ type: 'Nexa1Switch', window: 1 });
  var $switch2 = $({ type: 'Nexa1Switch', window: 2 });
  var $dimmer = $({ type: 'Nexa2Dimmer' });

  // $remote1.on('button', function(unit, event) {
  //   if (event.buttonNumber === 0) {
  //     fn.step(
  //       function() { $switch.send('state', event.isOn); },
  //       fn.sleep(500),
  //       function() { $switch.send('state', !event.isOn); }
  //     );
  //   }
  // });

  $remote2.on('button', function(unit, event) {
    if (event.buttonNumber === 3) {
      fn.step(
        function() { $switch1.send('state', event.isOn); },
        fn.sleep(500),
        function() { $switch2.send('state', event.isOn); },
        fn.sleep(500),
        function() { $dimmer.send('absoluteDim', event.isOn ? 0.5 : 0); }
      );
      
    }
  });
};