// 소수인지 확인
function isPrime(target)
{
    for (let i=2; i<= Math.sqrt(target); i++)
    {
        if (target % i == 0)
            return (false);
    }
    return (true);
}

function solution(n) {
    var answer = n >= 2 ? 1 : 0;

    for (num = 3; num <= n; num++)
    {
        if (isPrime(num))
        {
            answer += 1
        }
    }
  
    return answer;
}