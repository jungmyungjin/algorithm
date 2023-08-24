function solution(n) {
    return "수박".repeat(Math.floor(n/2)) + "수".repeat(n%2);
}