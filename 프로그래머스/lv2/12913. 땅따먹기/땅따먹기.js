function solution(land) {
    var answer = 0;

    let array = [];
    // 이전에 밟은 구역
    let footPrint = -1;
   
    land.forEach((line, idx)=>{

        for(let i=0; i<4; i++)
        {
            if(footPrint === i)
                continue;
            
            footPrint = i;
            answer += line[i];
            break;
        }
        
        
    })
    
    return answer;
}