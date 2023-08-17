function solution(citations) {
    citations.sort((a,b)=>b-a);
    for(let i=1; i<=citations.length; i++)
    {
        // i 이상 인용
        let up = 0;
        for(let j=0; j<citations.length; j++)
        {
            if (i < citations[j])
                up++
        }

        
        if (i === up)
            return i;
    }
    
    return 0;
}






// 예전에 푼 문제
// function solution(citations) {
//     var answer = 0;
//     citations.sort((a,b)=>{return a-b});
//     console.log(citations);
//     for(let i=0; i<citations.length; i++)
//         {
//             const num = citations.length - i;
//             if (num == citations[num -1] && 
//                 ((num-1 > 0  && num != citations[num -2]) ||
//                (num-1 == 1 && num != citations[num -2]))
//                )
//             {
//                 answer = num;
//             }
//         }
//     return answer;
// }