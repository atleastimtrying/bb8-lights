var Cylon = require('cylon');
var color = require('onecolor');

Cylon.robot({
  connections: {
    bluetooth: { 
      adaptor: 'central',
      uuid: 'cb157b931d5a4066bdc73de6080b794b', 
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
        console.log(j, colour.toString(16));
        my.ollie.setRGB(colour);
      };
    };

    my.ollie.wake(function(err, data){
      console.log("wake");
      for(var i = 1, l = 360; i < l; ++i ){
        after((i * 20) + 500, set_colour(i,l));
      }

    });
  }
}).start();
