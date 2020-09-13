const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx.canvas);
// const deg2Rad = deg => (Math.PI / 180) * deg;
// const rad2Deg = rad => (180 / Math.PI) * rad;

const {width: w, height: h} = canvas;

ctx.fillStyle = "grey";
ctx.fillRect(0, 0, w, h);

const center = w/2;
ctx.textAlign = "center";
ctx.fillStyle =  "black";
for(let i = 1; i < 11; i++){
    ctx.fillText("text in game", center, i * 40);
}

ctx.strokeText("stroked text", center, h-30);

// const gridSize = 10;
// const grid = [];

// for(let u = 1/ctx.canvas.width; u <= 1; i++){
//     for(let v = 1/ctx.canvas.height; v <= 1; v++)
// }