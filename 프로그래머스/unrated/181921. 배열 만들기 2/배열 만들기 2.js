function solution(l, r) {
    var answer = [];
    for(let num = l; num <=r; num++)
    {
        const char = num+'';
        if(char.split('').every((n)=>n==='5' || n==='0'))
            answer.push(num);
        
    }
    return answer.length === 0 ? [-1] : answer;
}