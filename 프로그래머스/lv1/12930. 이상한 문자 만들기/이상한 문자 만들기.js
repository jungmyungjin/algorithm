function solution(s) {
    let words = s.split(' ');
    let result = [];
    for(let i=0; i<words.length; i++)
    {
        let replace = ''
        for (let j=0; j<words[i].length; j++)
        {
            replace += j%2 ===0 ? words[i][j].toUpperCase() : words[i][j].toLowerCase() ;
        }
        result.push(replace);
    }
    
    return result.join(' ');
}