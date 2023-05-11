var fs = require("fs");
var input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [length, max] = input[0].split(" ").map((e) => Number(e));
const numbers = input[1].split(" ").map((e) => Number(e));

let sum = [];
for (let n1 = 0; n1 < length; n1++) {
  for (let n2 = 0; n2 < length; n2++) {
    if (n1 === n2) {
      continue;
    }
    for (let n3 = 0; n3 < length; n3++) {
      if (
        n2 === n3 ||
        n1 === n3 ||
        numbers[n1] + numbers[n2] + numbers[n3] > max
      ) {
        continue;
      }
      // console.log(
      //   typeof numbers[n1],
      //   numbers[n1] + " " + numbers[n2] + " " + numbers[n3],
      //   numbers[n1] + numbers[n2] + numbers[n3]
      // );
      sum.push(numbers[n1] + numbers[n2] + numbers[n3]);
    }
  }
}

sum = sum.sort((a, b) => a - b);

console.log(sum.pop());
