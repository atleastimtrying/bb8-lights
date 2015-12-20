# bb8-lights
Playing with the lights on sphero bb8 via clyon.js

The majority of the setup of this project was from this excellent gist by @jakswa 

https://gist.github.com/jakswa/6d607ceb130ace7f3d0c

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
Then take its UUID and assign it to `uuid` in the config.js file

Then run `node bb8.js`!

## What next?
I'd like to incorperate some more interesting colourschemes and possibly include some reaction to the accelerometer readings.
