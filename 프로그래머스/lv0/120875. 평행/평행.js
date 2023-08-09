const getCombinations = (arr, num)=>{
    let result = [];
    
    if (num === 1)
        return arr;

    arr.forEach((fixed, idx)=>{
        const rest = arr.slice(idx+1);
        const combis = getCombinations(rest, num-1);
        const added = combis.map((e)=>[fixed,e]);
        result.push(...added);
    })
    
    return result
}

function solution(dots) {
    var answer = 0;    
    const combination =getCombinations(dots, 2);
    
    for(let lineA of combination)
    {
        let lineB = dots.filter((dot)=> !lineA.includes(dot));
        
        lineA.sort((a,b)=> b[0] - a[0]);
        lineB.sort((a,b)=> b[0] - a[0]);

        if((lineA[0][0] - lineA[1][0]) / (lineA[0][1] - lineA[1][1]) ===  (lineB[0][0] - lineB[1][0]) / (lineB[0][1] - lineB[1][1]))
            return 1
    }
    
    
    return 0;
}