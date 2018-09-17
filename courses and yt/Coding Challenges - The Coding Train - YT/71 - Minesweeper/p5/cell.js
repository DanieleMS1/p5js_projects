function Cell(i, j, s) {
  this.i = i;
  this.j = j;
  this.x = i * s;
  this.y = j * s;
  this.s = s;
  this.neighbor_count;
  if (random(1) < 0.5) {
    this.bomb = true;
  } else {
    this.bomb = false;
  }
  this.revealed = false;

  this.show = function() {

    stroke(0);
    noFill();
    rect(this.x, this.y, this.s, this.s);
    if (this.revealed) {
      if (this.bomb) {
        stroke(0);
        fill(227, 138, 34);
        ellipse(this.x + 0.5 * this.s, this.y + 0.5 * this.s, 0.5 * this.s);
      } else {
        fill(200);
        rect(this.x, this.y, this.s, this.s);
        textAlign(CENTER);
        textSize(s / 2);
        fill(0);
        if (this.neighbor_count != 0) {
          text(this.neighbor_count, this.x + this.s * 0.5, this.y + this.s * 0.7);
        }
      }
    }
  }

  this.count_bombs = function() {
    if (this.bomb) {
      return (-1);
    }
    let total = 0;
    for (let xoff = -1; xoff <= 1; xoff++) {
      for (let yoff = -1; yoff <= 1; yoff++) {
        let i = this.i + xoff;
        let j = this.j + yoff;
        if (i > -1 && i < cols && j > -1 && j < rows) {
          let neighbor = grid[i][j]
          if (neighbor.bomb) {
            total++;
          }
        }
      }
    }
    this.neighbor_count = total;
  }

  this.contains = function(x, y) {
    return (x > this.x && x < this.x + this.s && y > this.y && y < this.y + this.s);
  }

  this.reveal = function() {
    this.revealed = true;
  }
}
