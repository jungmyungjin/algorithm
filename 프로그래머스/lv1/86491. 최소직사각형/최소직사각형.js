function solution(sizes) {
    var answer = 0;
    
    // 가로가 더 긴 명함지갑
    let [maxWidth, maxHeight] = [0,0];
    
    sizes.forEach(e=>{
        let [bigger, smaller] = (e[0] > e[1])? [e[0],e[1]] : [e[1], e[0]];
        maxWidth = maxWidth < bigger ? bigger : maxWidth;
        maxHeight = maxHeight < smaller ? smaller : maxHeight;
    })    
    return maxWidth*maxHeight;
}