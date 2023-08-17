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