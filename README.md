# battery-status

Get the raw status of a battery. Probably only works on Linux.

## Example

``` javascript
const batteryStatus = require('battery-status');

batteryStatus('BAT1', function(error, status) {
  if (error) {
    throw error;
  }

  console.log(status);
  // => 'Discharging'
});
```

## Installation

``` bash
$ npm install battery-status
```

## API

``` javascript
const batteryStatus = require('battery-status');
```

### `battery-status([battery='BAT0'], callback)`

Calls `callback(error, status)`, where `error` is any _Error_ encountered and
_String_ `status` is the raw status of _String_ `battery` (which defaults to
`'BAT0'`).
