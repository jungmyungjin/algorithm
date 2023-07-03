function solution(picture, k) {
    var answer = [];
    
    for(let i=0;i<picture.length; i++)
    {
        let line = '';
        for(let j=0; j<picture[0].length; j++)
        {
            line += picture[i][j].repeat(k);
        }
        
        for(let j=0; j<k; j++)
        {
            answer.push(line)
        }
    }
    
    
    return answer;
}