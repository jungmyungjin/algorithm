function solution(k, m, score) {
    var answer = 0;
    
    if (score.length < m)
        return 0;
    
    score.sort((a,b)=>b-a);
    
    let min = k+1; // 나올 수 있는 최대 값 + 1
    for(let i=0; i<(score.length - score.length % m); i++)
    {
         min = min > score[i] ? score[i] : min;
        if (min < k+1 && (i+1) % m === 0)
        {
            answer += min * m;
            min = k+1;
            continue;
        }
    }
    
    return answer;
}