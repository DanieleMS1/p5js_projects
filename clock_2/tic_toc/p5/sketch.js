let canvas_w = 900;
let canvas_h = 900;

let x_offset = 0.025 * canvas_w;
let x_pos = -canvas_w / 2 + x_offset;

let y_dim = 0.1 * canvas_h;
let y_spacing = y_dim + 0.015 * canvas_h;

let y_sc = y_spacing - y_dim / 2;
let y_mn = -y_dim / 2;
let y_hr = -y_spacing - y_dim / 2;

let max_len = 0.85 * canvas_w;

let text_size = y_dim;
let text_lead = 0.75;

let out_size = 0.075 * y_dim;


function setup() {
  createCanvas(canvas_w, canvas_h);
}

function draw() {

  background(255);

  let hr = hour();
  let mn = minute();
  let sc = second();

  let ln_sc = map(sc, 0, 60, 0, max_len);
  let ln_mn = map(mn, 0, 60, 0, max_len);
  let ln_hr = map(hr % 12, 0, 12, 0, max_len);

  translate(canvas_w / 2, canvas_h / 2);

  strokeWeight(out_size);
  stroke(0);

  fill(160, 82, 45);
  rect(x_pos, y_sc, ln_sc, y_dim);
  fill(205, 133, 63);
  rect(x_pos, y_mn, ln_mn, y_dim);
  fill(222, 184, 135);
  rect(x_pos, y_hr, ln_hr, y_dim);

  fill(0);
  noStroke();
  textSize(text_size);
  textAlign(CENTER, CENTER);

  if (sc < 10) {
    text('0' + sc, x_pos + ln_sc + text_lead * text_size, y_sc + 0.5 * text_size);
  } else {
    text(sc, x_pos + ln_sc + text_lead * text_size, y_sc + 0.5 * text_size);
  }

  if (mn < 10) {
    text('0' + mn, x_pos + ln_mn + text_lead * text_size, y_mn + 0.5 * text_size);
  } else {
    text(mn, x_pos + ln_mn + text_size, y_mn + 0.5 * text_size);
  }

  if (hr < 10) {
    text('0' + hr, x_pos + ln_hr + text_lead * text_size, y_hr + 0.5 * text_size);
  } else {
    text(hr, x_pos + ln_hr + text_lead * text_size, y_hr + 0.5 * text_size);
  }






}
