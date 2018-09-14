let canvas_w = 600; //canvas width
let canvas_h = 600; //canvas height
let size = 15;      //size of largest dot
let num = 11;       //number of dots per line
let counter = 0;    //make the whole thing rotate
let spacing = 20;   //spacing between dots
let rot = 20;       //angle between dots
let off_rot = 10;   // angle between lines and dots
let speed = 0.5;    // speed of rotation



function setup() {
  createCanvas(canvas_w, canvas_h);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(canvas_w / 2, canvas_h / 2); // centered in (0,0);

  fill(255);
  noStroke();
  rotate(counter * speed);
  for (let j = 0; j < 360 / rot; j++) {
    rotate(rot);
    for (let i = 2; i < num; i++) {
      ellipse(spacing * i, 0, size / i);

      push()
      strokeWeight(abs(cos(counter)));
      stroke(255);
      rotate(off_rot);
      line(20, 0, 150 * abs(cos(counter)) + 10, 0);
      pop()
    }
  }
  counter++;


}
