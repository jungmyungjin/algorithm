function solution(left, right) {
    var answer = 0;
    
    for(let i=left; i<=right; i++)
    {
        let div = 0;
        for(let j=1; j<=i; j++)
        {
            for(let k=j; k<=i; k++)
            {
                if (j*k === i)
                {
                    div += j===k ? 1 : 2;
                }
            }
        }
        answer = (div % 2 === 0) ? answer+i : answer-i;
    }
    
    return answer;
}