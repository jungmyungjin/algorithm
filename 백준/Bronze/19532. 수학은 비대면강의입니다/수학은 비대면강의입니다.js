var fs = require("fs");
var input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

// input : 1 3 -1 4 1 7
// a, b, c, d, e, f
// c = a*x + b*y
// f = d*x + e*y
// -999 <= x, y <= 999

let [x, y] = [0, 0];
const [[a, b, c, d, e, f]] = [input[0].split(" ").map((e) => Number(e))];

let found = 0;
for (let xx = -999; xx <= 999 && !found; xx++) {
  for (let yy = -999; yy <= 999 && !found; yy++) {
    if (c === a * xx + b * yy && f === d * xx + e * yy) {
      [x, y] = [xx, yy];
      found = 1;
    }
  }
}

console.log(x + " " + y);
