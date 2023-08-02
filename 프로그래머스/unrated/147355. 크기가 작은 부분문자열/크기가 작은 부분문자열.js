function solution(t, p) {
    var answer = 0;
    const length = p.length;
    const numbers = t.split('');
    
    const pNum = parseInt(p);
        for(let i=0; i<=numbers.length-length; i++)
    {
        const iNum=parseInt(numbers.slice(i, i+length).join(''));
        if(iNum <= pNum)
            answer++;
    }
    
    return answer;
}