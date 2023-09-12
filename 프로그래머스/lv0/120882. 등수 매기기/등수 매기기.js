function solution(score) {
    var answer = [];
    let averages = [];
    
    // 평균 배열
    averages = score.map((scores)=>(scores[0]+scores[1]) / 2);
    
    // 평균 등수 내림차순 배열
    const sorted = [...averages].sort((a,b)=>b-a);
    
    // 등수 찾기
    averages.forEach((average)=>{
        let rank = 0;
        for(let i=0; i<sorted.length; i++)
        {
            if(average === sorted[i])
            {
                // 이전 등수와 같은지 확인, 같다면 이전 등수로
                for(let j=i; j>=0; j--)
                {
                    if(average === sorted[j])
                        rank = j+1;
                    else
                        break;
                }
            }
        }
        answer.push(rank);
    })
    
    return answer;
}