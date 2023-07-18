function solution(numlist, n) {
    var answer = [];
    
    const keyNum = n;
    answer = numlist.sort((a,b)=>{
        const rangeA = Math.abs(keyNum - a);
        const rangeB = Math.abs(keyNum - b);
        if (rangeA === rangeB)
            return a < b ? 1 : -1;
        
        return rangeA < rangeB ? -1 : 1;
    })
    return answer;
}