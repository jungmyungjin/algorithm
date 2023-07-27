function solution(n) {
    var answer = n+1;
    const originOneCount = n.toString(2).split('').reduce((total, e,idx)=> total+=parseInt(e),0)
    while(answer < 1000000)
    {
        const targetOneCount = answer.toString(2).split('').reduce((total, e,idx)=> total+=parseInt(e),0)
        if(originOneCount === targetOneCount)
        {
            return answer;
        }
        answer++
    }
    return answer;
}