function solution(answers) {
    let supozaMethod = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    let supozaScore = [0,0,0];
    
    
    for(let i=0; i<answers.length; i++)
    {
        const grading = answers[i];
        if(grading === supozaMethod[0][i%supozaMethod[0].length])
            supozaScore[0]++
        if(grading === supozaMethod[1][i%supozaMethod[1].length])
            supozaScore[1]++
        if(grading === supozaMethod[2][i%supozaMethod[2].length])
            supozaScore[2]++
    }    
    let bestScore = supozaScore.reduce((total, current)=>total<current? current : total,0) ;
    
    let answer =[];
    if (bestScore === supozaScore[0])
        answer.push(1);
    if (bestScore === supozaScore[1])
        answer.push(2);
    if (bestScore === supozaScore[2])
        answer.push(3);
    
    return answer;
}