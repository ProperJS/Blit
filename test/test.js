var Blit = require( "../Blit" );

var blit = new Blit({
    // Default is 60
    fps: 60,
    
    // Default is true
    paused: true,
    
    // Handle blits
    blit: function ( f ) {
        // Do stuff here
        // f === current frame number
        console.log( f );
    }
    
}).start();