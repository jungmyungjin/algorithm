var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 빈 문자열 처리
if (input[0] === "") {
    console.log(0);
} else {
    console.log(input.length);
}
