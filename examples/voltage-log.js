module.exports = function($) {
  $({ type: 'BusVoltage' })
    .on('meta:voltage', function(unit, voltage) {
      console.log('voltage is', voltage);
    });
};