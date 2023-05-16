function solution(answers) {
    let answer = [];
    const checker = (method)=>{
        let correct = 0;
        for (let i=0; i<answers.length; i++)
        {
            if (answers[i] === method[i%method.length])
            {
                correct++;
            }
        }
        return correct;
    }
    const [supoja1 ,supoja2 , supoja3] = [ checker([1,2,3,4,5]),checker([2,1,2,3,2,4,2,5]),checker([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]) ]
    
    const topScore = [supoja1 ,supoja2 , supoja3].reduce((total,cur,idx)=>total < cur ? cur : total, 0);
    
   [supoja1 ,supoja2 , supoja3].forEach((cur, idx)=>{
        if (topScore === cur)
            answer.push(idx+1);
    })
    
    
    return answer;
}