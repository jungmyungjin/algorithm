var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = [];
input.shift();

let nums = new Set(input.map((num) => Number(num)));
let uniqNum = [...nums];

answer = uniqNum.sort((a, b) => a - b);

console.log(answer.join("\n"));
