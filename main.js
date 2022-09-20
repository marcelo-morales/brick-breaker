import './style.css'
import Block from "./model/Block"
import Ball from './model/Ball';
import Paddle from './model/Paddle';

const canvas = 
  document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const redBlock = new Block(20, 40, 50, 50, "red");
redBlock.draw(ctx);

ctx.beginPath();
// do my drawing

// rect takes 4 params
ctx.rect(20, 40, 50, 50)
ctx.fill();
ctx.fillStyle = "red"
ctx.fill();

// to amke something move, need to updatec oord, on each frame -> repaint canvas, w a rate that will seem that it is moving
ctx.closePath();

// const blueSpirit = new Sprite {

// }

const blueBall = new Ball {

}

let [x, y] = [
  canvas.width / 2,
  canvas.height / 2,
];

let [dx, dy] = [2, -2]

let gameGoing = true

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.beginPath();
  ctx.rect(x, y, 50, 50)
  ctx.fillStyle = "blue"
  ctx.fill();
  ctx.closePath();

  blueBall.draw(ctx);
  paddle.draw(ctx);
  blueBall.move();
  

  gameGoing = blueBall.bounce(canvas.width, canvas.height);
  if (gameGoing) {
    window.requestAnimationFrame(draw);
  } else {
    window.alert("Game over!!!")
  }

  x += dx;
  y += dy;

  // takes care of viewing / movement -> standard is 60 frames per second -> allows reasonable moving object
  window.requestAnimationFrame(draw);
}

draw();

