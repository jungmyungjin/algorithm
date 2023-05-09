var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let obj = {};
for (let A of input[1].split(" ")) {
  obj[A] = 1;
}

let answer = [];
for (let M of input[3].split(" ")) {
  if (obj[M]) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}
console.log(answer.join("\n"));
