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

  let ln_sc = map(sc, 0, 60, 0, max_len);
  let ln_mn = map(mn, 0, 60, 0, max_len);
  let ln_hr = map(hr % 12, 0, 12, 0, max_len);


  translate(canvas_w / 2, canvas_h / 2);

  strokeWeight(out_size);
  stroke(0);

  fill(160, 82, 45);
  rect(x_pos, y_sc, p_sc * max_len, y_dim);
  fill(205, 133, 63);
  rect(x_pos, y_mn, p_mn * max_len, y_dim);
  fill(222, 184, 135);
  rect(x_pos, y_hr, p_hr * max_len, y_dim);

  fill(0);
  noStroke();
  textSize(text_size);
  textAlign(CENTER, CENTER);

  if (sc_txt < 10) {
    text('0' + sc_txt, x_pos + ln_sc + text_lead * text_size, y_sc + 0.5 * text_size);
  } else {
    text(sc_txt, x_pos + ln_sc + text_lead * text_size, y_sc + 0.5 * text_size);
  }

  if (mn_txt < 10) {
    text('0' + mn_txt, x_pos + ln_mn + text_lead * text_size, y_mn + 0.5 * text_size);
  } else {
    text(mn_txt, x_pos + ln_mn + text_size, y_mn + 0.5 * text_size);
  }

  if (hr_txt < 10) {
    text('0' + hr_txt, x_pos + ln_hr + text_lead * text_size, y_hr + 0.5 * text_size);
  } else {
    text(hr_txt, x_pos + ln_hr + text_lead * text_size, y_hr + 0.5 * text_size);
  }






}
