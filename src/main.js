const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx.canvas);
// const deg2Rad = deg => (Math.PI / 180) * deg;
// const rad2Deg = rad => (180 / Math.PI) * rad;

const {width: w, height: h} = canvas;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, w, h);
ctx.fillStyle = "#555";

let x, y, radius;

for(let i = 0; i < 550; i++) {
    x = Math.random() * w;
    y = Math.random() * h;
    radius = Math.random() * 3;
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();

}


// const gridSize = 10;
// const grid = [];

// for(let u = 1/ctx.canvas.width; u <= 1; i++){
//     for(let v = 1/ctx.canvas.height; v <= 1; v++)
// }