module.exports = function($, fn) {
  $temp = $({ type: 'Ds18x20' });
  
  console.log('temp length', $temp.length);
  
  $temp.on('online', function(unit) {
    console.log('setting report interval', $temp.length, unit);
    $temp.send('reportInterval', 5);    
  });
};