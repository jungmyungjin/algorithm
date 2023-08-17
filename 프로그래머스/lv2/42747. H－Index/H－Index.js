function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>{return a-b});
    console.log(citations);
    for(let i=0; i<citations.length; i++)
        {
            const num = citations.length - i;
            if (num == citations[num -1] && 
                ((num-1 > 0  && num != citations[num -2]) ||
               (num-1 == 1 && num != citations[num -2]))
               )
            {
                answer = num;
            }
        }
    return answer;
}