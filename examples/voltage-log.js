module.exports = function($, fn) {
  $({ type: 'BusVoltage' })
    .on('meta:voltage', function(unit, voltage) {
      console.log('voltage is', voltage);
    });
};