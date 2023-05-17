function solution(numbers) {
 var answer = '';

    numbers.sort((a, b) => {
        const num1 = String(a) + String(b);
        const num2 = String(b) + String(a);
        return parseInt(num2) - parseInt(num1);
    });

    if (numbers[0] === 0) {
        return '0'; // 예외 처리: 모든 숫자가 0인 경우
    }

    answer = numbers.join('');

    return answer;
}

// solution([3, 30, 34, 5, 9]);