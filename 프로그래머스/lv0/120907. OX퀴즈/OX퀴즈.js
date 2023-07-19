function solution(quiz) {
    var answer = [];
    
    quiz.forEach(q=>{
        let [num1, sign1, num2, sign2, result ] = q.split(' ');
        
        num1 = parseInt(num1)
        num2 = parseInt(num2);
        result = parseInt(result);
        
        const compareResult = sign1 === '+' ? num1 + num2 : num1 - num2
        
        console.log(num1, num2,result)
        if (compareResult === result)
        {
            answer.push('O')
        }
        else{
            answer.push('X')
        }
    })
    
    return answer;
}