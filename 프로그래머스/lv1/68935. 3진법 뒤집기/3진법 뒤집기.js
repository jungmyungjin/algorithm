function solution(number) {
    return parseInt(number.toString(3).split('').reverse().join(''),3);
}