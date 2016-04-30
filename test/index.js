var batteryStatus = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(batteryStatus));
});

test('returns status', function(t) {
  t.plan(4);
  batteryStatus('BAT0', function(error, status) {
    t.error(error);
    t.ok(status === 'Charging'
      || status === 'Discharging'
      || status === 'Full'
      || status === 'Unknown');
  });
  batteryStatus('BAT1', function(error, status) {
    t.error(error);
    t.ok(status === 'Charging'
      || status === 'Discharging'
      || status === 'Full'
      || status === 'Unknown');
  });
});

test('defaults to BAT0', function(t) {
  t.plan(2);
  batteryStatus(function(error, status) {
    t.error(error);
    t.ok(status === 'Charging'
      || status === 'Discharging'
      || status === 'Full'
      || status === 'Unknown');
  });
});
