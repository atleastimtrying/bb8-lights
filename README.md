# bb8-lights
Playing with the lights on sphero bb8 via clyon.js

The majority of the setup of this project was from this excellent gist by @jakswa 

https://gist.github.com/jakswa/6d607ceb130ace7f3d0c

*This project is not endorsed by sphero, it hasn't broken mine but use this at your own risk!*

## Setup

```
cd bb8-lights
npm install
```

First scan for your BB8 (the device name should contain BB in it, you may have ot run this twice):

```
> sudo cylon-ble-scan
[...]
Peripheral discovered!
  Name: BB-3B29
  UUID: 161205d4f3a04149a1ea82762d30fd86
  rssi: -63

```

Create a new config.js file

```
> mv sample-config.js config.js
```

Then take the UUID and assign it to `uuid` in your new config.js file (mine is below for an example).

```
module.exports = {
  uuid: "cb157b931d5a4066bdc73de6080b794b",
  debugger: true
};

```

Then run `node bb8.js`!

The script ends using `process.exit()` when the colours have finished looping.

## What next?

I'd like to incorperate some more interesting colourschemes and possibly include some reaction to the accelerometer readings.
