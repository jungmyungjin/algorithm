var fs = require("fs");
var input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

let N = 0;
const [[M]] = [input[0].split(" ").map((e) => Number(e))];

for (let i = 1; i < M; i++) {
  let tmpI = i;
  let total = 0;
  while (tmpI / 10 > 0) {
    total += parseInt(tmpI % 10);
    tmpI /= 10;
    tmpI = parseInt(tmpI);
  }
  total += tmpI;

  if (total + i === M) {
    N = i;
    break;
  }
}

console.log(N);
