function solution(arr)
{
     var answer = [arr[0]];
    
    for (let i=1; i<arr.length; i++)
    {
        if (arr[i-1] === arr[i])
            continue;
        answer.push(arr[i]);
    }
    
    return answer;
}


/* 시간 초과 코드
    var answer = [arr[0]];
    
    for (let i=1; i<arr.length; i++)
    {
        if (arr[i-1] === arr[i])
            continue;
        answer.push(arr[i]);
    }

*/