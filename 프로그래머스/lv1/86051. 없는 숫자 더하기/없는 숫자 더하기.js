function solution(numbers) {
    return numbers.reduce((total,current)=>total -= current, 45);
}