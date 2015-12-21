var Cylon = require('cylon');
var color = require('onecolor');
var config = require('./config.js');

if(config.uuid === "insert uuid here"){
  console.log('please identify the bluetooth uuid of your sphero, see the readme!');
  return;
}

var log = function(){
  if(config.debugger){
    console.log(arguments);
  }
}

Cylon.robot({
  connections: {
    bluetooth: { 
      adaptor: 'central',
      uuid: config.uuid, 
      module: 'cylon-ble'
    }
  },

  devices: {
    ollie: { driver: 'ollie'}
  },

  work: function(my) {

    var set_colour = function(i, l){
      var j = i;
      var k = l;
      return function(){
        var colour = parseInt(color('hsl(' + Math.ceil(i/l * 360) + ', 80%, 70%)').hex().slice(1), 16)
        log(j, colour.toString(16));
        my.ollie.setRGB(colour);
        if(i === l - 1){
          log('END OF RUN');
          process.exit();
        }
      };
    };

    my.ollie.wake(function(err, data){
      log("wake");
      for(var i = 1, l = 360; i < l; ++i ){
        after((i * 20) + 500, set_colour(i,l));
      }

    });
  }
}).start();
