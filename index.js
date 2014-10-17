var path = require('path');
var firstLine = require('first-line');
var isFunction = require('lodash.isfunction');

function batteryStatus(battery, callback) {
  if (isFunction(battery)) {
    callback = battery;
    battery = 'BAT0';
  }

  var bstr = path.resolve('/sys/class/power_supply/', battery, 'status');
  firstLine(bstr, function(error, status) {
    if (error) {
      callback(error);
      return;
    }

    callback(error, status.toString());
  });
}

module.exports = batteryStatus;