// Greedy 알고리즘
// 매순간 최적이라고 생각되는 선택을 한다.
function solution(d, budget) {
    var answer = 0;
   
    d.sort((a,b)=>a-b);
    console.log(d)
    
    for(let i=0; i< d.length && budget > 0; i++)
    {
        console.log(budget, budget % d[i], d[i] )
        if (budget / d[i] >= 1 )
        {
            answer++;
            budget -= d[i];
        }
    }
    
    
    return answer;
}