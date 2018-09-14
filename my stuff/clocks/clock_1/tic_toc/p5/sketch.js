let canvas_w = 900;
let canvas_h = 900;

let angle = 0;
let spd = 0.5;

let x_len = 0.2125 * canvas_w;
let y_pos = 0.075 * canvas_h;

let dir = 1;
let check = 1;
let counter = 0;

let sc_arc = 0.65 * canvas_w;
let mn_arc = 0.7 * canvas_w;
let hr_arc = 0.75 * canvas_w;

let text_size = 0.125 * canvas_w;
let arc_size = 0.02 * canvas_w;
let bar_size = 0.025 * canvas_w;


function setup() {
  createCanvas(canvas_w, canvas_h);
}



function draw() {

  background(0);
  angleMode(DEGREES);
  strokeWeight(bar_size);
  stroke(255);

  translate(canvas_w / 2, canvas_h / 2);

  let hr = hour();
  let mn = minute();
  let sc = second();

  /*
  1 - dir > 0, check > 0   - counter % 2 = 0
  2 - dir < 0, check > 0   - counter % 2 = 1
  3 - dir > 0, check < 0   - counter % 2 = 0
  2 - dir < 0, check < 0   - counter % 2 = 1
  */

  //cool metronome style line
  if (dir > 0) {
    if (check > 0) {
      line(x_len, y_pos, x_len * cos(angle * spd * dir * 0.5), y_pos); // 1
    } else {
      line(-x_len, y_pos, -x_len * cos(angle * spd * dir * 0.5), y_pos); // 3
    }
  } else {
    if (check > 0) {
      line(-x_len, y_pos, x_len * cos(angle * spd * dir * 0.5), y_pos); // 2
    } else {
      line(x_len, y_pos, -x_len * cos(angle * spd * dir * 0.5), y_pos); // 4
    }
  }

  //code for text display
  //had to do all these if statements to fix the one digit issue
  fill(255);
  noStroke();
  textSize(text_size);
  textAlign(CENTER, CENTER);

  if (hr < 10) {
    if (mn < 10) {
      if (sc < 10) {
        text('0' + hr + ':0' + mn + ':0' + sc, 0, 0);
      } else {
        text('0' + hr + ':0' + mn + ':' + sc, 0, 0);
      }
    } else {
      if (sc < 10) {
        text('0' + hr + ':' + mn + ':0' + sc, 0, 0);
      } else {
        text('0' + hr + ':' + mn + ':' + sc, 0, 0);
      }
    }
  } else {
    if (mn < 10) {
      if (sc < 10) {
        text(hr + ':0' + mn + ':0' + sc, 0, 0);
      } else {
        text(hr + ':0' + mn + ':' + sc, 0, 0);
      }
    } else {
      if (sc < 10) {
        text(hr + ':' + mn + ':0' + sc, 0, 0);
      } else {
        text(hr + ':' + mn + ':' + sc, 0, 0);
      }
    }

  }

  //code for arc rotation and mapping

  rotate(-90);
  rotate(dir * angle * spd);

  strokeWeight(arc_size);
  noFill();

  //seconds
  stroke(255, 100, 150);

  if (sc == 0) {} else {
    let end1 = map(sc, 0, 60, 0, 360);
    arc(0, 0, sc_arc, sc_arc, 0, end1);
  }

  //minutes
  stroke(150, 100, 255);

  if (mn == 0) {} else {
    let end2 = map(mn, 0, 60, 0, 360);
    arc(0, 0, mn_arc, mn_arc, 0, end2);
  }
  //hours
  stroke(150, 255, 100);

  if (hr == 0) {} else {
    let end3 = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, hr_arc, hr_arc, 0, end3);
  }

  angle++;

  //back and forth i like it!
  if ((angle * spd) >= 360) {
    counter++;
    angle = 0;
    dir *= -1;
    if (counter % 2 == 0) {
      check *= -1;
      if (counter == 2) {
        counter = 0;
      }
    }
  }
}
