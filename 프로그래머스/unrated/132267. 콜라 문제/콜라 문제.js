function solution(a, b, n) {
    var answer = 0;
    let rest = n;
    const [cost,exchange] = [a,b];
    
    while(rest >= cost)
    {
        answer += Math.floor(rest/cost) * exchange;
        rest = Math.floor(rest/cost) * exchange + rest%cost;
    }
    
    
    return answer;
}