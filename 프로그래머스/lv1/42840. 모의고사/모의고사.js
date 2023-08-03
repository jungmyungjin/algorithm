function solution(answers) {
    let answer = [];
    // 정답을 몇개 맞았는지 체크하는 함수
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
    // 수포자 별 정답 체크
    const [supoja1 ,supoja2 , supoja3] = [ checker([1,2,3,4,5]),checker([2,1,2,3,2,4,2,5]),checker([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]) ]
    
    // 가장 높은 점수 체크 
    const topScore = [supoja1 ,supoja2 , supoja3].reduce((total,cur,idx)=>total < cur ? cur : total, 0);
    
    // 가장 높은 점수를 가진 수포자를 `answer` 배열에 입력
   [supoja1 ,supoja2 , supoja3].forEach((cur, idx)=>{
        if (topScore === cur)
            answer.push(idx+1);
    })
    
    
    return answer;
}