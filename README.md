ProperJS // Blit
================

> A simple gamecycle engine.



### Installation

```shell
npm i properjs-blit --save-dev
```


### Usage
An example of using `Blit` to sequence an animation on a Javascript canvas:
```javascript
import Blit from "properjs-blit";
const images = [
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_01.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_02.png",
    ..., // Imagine there are many images (see test script/html for full reference)
].map(( url ) => {
    const img = new Image();

    img.src = url;
    img.onload = () => {
        console.log( `Loaded image node ${url}` );
    };

    return img;
});
const blit = new Blit({
  paused: true,
  fps: 24,
});
const canvas = document.getElementById( "canvas" );
const drawImage = ( img ) => {
    const context = canvas.getContext( "2d" );

    context.drawImage(
        img,
        0,
        0,
        canvas.width,
        canvas.height,
        0,
        0,
        canvas.width,
        canvas.height
    );
};

blit.blit(( f ) => {
    const frame = (f % images.length);

    drawImage( images[frame] );

}).start().play();
```
