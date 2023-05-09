var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

input = new Set(input);

let uniqArr = [...input];

uniqArr = uniqArr.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
  }
  return a.length - b.length;
});

console.log(uniqArr.join("\n"));
