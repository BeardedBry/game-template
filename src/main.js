const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx.canvas);
// const deg2Rad = deg => (Math.PI / 180) * deg;
// const rad2Deg = rad => (180 / Math.PI) * rad;

const {width: w, height: h} = canvas;

ctx.fillStyle = "grey";
ctx.fillRect(0, 0, w, h);

const center = w/2;

const img = new Image();
img.src = "res/images/rick.png";
img.addEventListener("load", draw, false);

function draw(){
    for(let i = 0; i < 1; i++){
        const x = Math.random() * w - 50;
        const y = Math.random() * h - 100;
        let scale = Math.min(Math.random(), .25); // returns number between 0 and 1
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale, w/2, h/2, 100,100);
    }
}


// const gridSize = 10;
// const grid = [];

// for(let u = 1/ctx.canvas.width; u <= 1; i++){
//     for(let v = 1/ctx.canvas.height; v <= 1; v++)
// }