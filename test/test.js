import Blit from "../Blit";
const images = [
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_01.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_02.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_03.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_04.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_05.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_06.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_07.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_08.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_09.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_10.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_11.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_12.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_13.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_14.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_15.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_16.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_17.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_18.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_19.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_20.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_21.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_22.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_23.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_24.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_25.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_26.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_27.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_28.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_29.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_30.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_31.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_32.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_33.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_34.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_35.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_36.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_37.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_38.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_39.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_40.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_41.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_42.png",
    "https://www.kitajchuk.com/assets/img/kickflip/kickflip_43.png",
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
