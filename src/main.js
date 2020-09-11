const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx.canvas);
// const deg2Rad = deg => (Math.PI / 180) * deg;
// const rad2Deg = rad => (180 / Math.PI) * rad;

ctx.strokeStyle="black";
ctx.fillStyle="red";

ctx.fillRect(300, 200, 50, 50);
ctx.strokeRect(300,200,50,50);

ctx.beginPath();
ctx.arc(325, 170, 25, 0, Math.PI * 2, false);
ctx.fill();
ctx.stroke();





// const gridSize = 10;
// const grid = [];

// for(let u = 1/ctx.canvas.width; u <= 1; i++){
//     for(let v = 1/ctx.canvas.height; v <= 1; v++)
// }