Blit
====

> A simple gamecycle engine.



## Installation

```shell
npm install properjs-blit --save-dev
```


## Usage

```javascript
var Blit = require( "properjs-blit" );

var blit = new Blit({
    // Default is 60
    fps: 60,
    
    // Default is true
    paused: true,
    
    // Handle blits
    blit: function ( f ) {
        // Do stuff here
        // f === current frame number
    }
    
}).start();

// Or you can chain the blits
var blit = new Blit().blit(function ( f ) {
    // Do stuff here
    // f === current frame number

}).start();

// Also
blit.pause();
blit.play();
blit.stop();
```