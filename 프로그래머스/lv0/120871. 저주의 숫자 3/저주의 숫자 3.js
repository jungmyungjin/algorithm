function solution(n) {
    let nums3x = [];
    
    for(let i=0; nums3x.length <= n; i++)
    {
        if(i %3 !== 0 && !((i+'').includes('3')))
        {
            nums3x.push(i);
        }
    }
    
    return nums3x[n-1];
}