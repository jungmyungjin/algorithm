function solution(emergency) {
    var answer = [];

    const emergen = [... emergency]; // 깊은 복사
    let sorted = [... emergency];
    sorted.sort((a,b)=>b-a);
    
    for (let i=0; i<sorted.length; i++ )
    {
        answer.push(sorted.indexOf(emergen[i])+1);
    }
    
    return answer;
}