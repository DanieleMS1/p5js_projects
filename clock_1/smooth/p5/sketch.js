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


  let d = new Date();


  let ml = d.getMilliseconds();
  let p_ml = ml / 1000 + 0.001;

  let sc = d.getSeconds() + p_ml;
  let p_sc = sc / 60 + 0.001;

  let mn = d.getMinutes() + p_sc;
  let p_mn = mn / 60 + 0.001;

  let hr = d.getHours() + p_mn;
  let p_hr = hr % 12 / 12 + 0.001;

  let hr_txt = hour();
  let mn_txt = minute();
  let sc_txt = second();

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

  if (hr_txt < 10) {
    if (mn_txt < 10) {
      if (sc_txt < 10) {
        text('0' + hr_txt + ':0' + mn_txt + ':0' + sc_txt, 0, 0);
      } else {
        text('0' + hr_txt + ':0' + mn_txt + ':' + sc_txt, 0, 0);
      }
    } else {
      if (sc_txt < 10) {
        text('0' + hr_txt + ':' + mn_txt + ':0' + sc_txt, 0, 0);
      } else {
        text('0' + hr_txt + ':' + mn_txt + ':' + sc_txt, 0, 0);
      }
    }
  } else {
    if (mn_txt < 10) {
      if (sc_txt < 10) {
        text(hr_txt + ':0' + mn_txt + ':0' + sc_txt, 0, 0);
      } else {
        text(hr_txt + ':0' + mn_txt + ':' + sc_txt, 0, 0);
      }
    } else {
      if (sc_txt < 10) {
        text(hr_txt + ':' + mn_txt + ':0' + sc_txt, 0, 0);
      } else {
        text(hr_txt + ':' + mn_txt + ':' + sc_txt, 0, 0);
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
  arc(0, 0, sc_arc, sc_arc, 0, p_sc * 360);


  //minutes
  stroke(150, 100, 255);
  arc(0, 0, mn_arc, mn_arc, 0, p_mn * 360);
  //hours
  stroke(150, 255, 100);
  arc(0, 0, hr_arc, hr_arc, 0, p_hr * 360);


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
