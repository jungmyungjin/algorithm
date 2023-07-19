function solution(lines) {
    var answer = 0;
//     const newLines = lines.map((e)=>[e[0]+100, e[1]+100]);
//     let [min, max] = [0, 0];
    
//     newLines.forEach(e=>{
//         min = min > e[0] ? e[0] : min;
//         max = max < e[0] ? e[0] : max;
//         min = min > e[1] ? e[1] : min;
//         max = max < e[1] ? e[1] : max;
//     })
    
    const bar = Array.from({length:200}, e=>0);
    
    lines.forEach(line => {
        const [lineStart, lineEnd] = [line[0]+100, line[1]+100];
        for(let i=lineStart; i<lineEnd; i++)
        {
            bar[i]++;
        }
    })
 
    return bar.filter(e=>e>1).length;
}