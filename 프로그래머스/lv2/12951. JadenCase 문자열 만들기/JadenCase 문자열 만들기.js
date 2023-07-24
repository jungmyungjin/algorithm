function solution(s) {
    let answer = s.replaceAll(/(^[^\s]|(?<=\s)[^\s])([^\s]*)/g, (match, p1, p2)=>{
        console.log(match, p1, p2);
        console.log(p1[0].toUpperCase() + p2.toLowerCase());
        return p2 ? p1[0].toUpperCase() + p2.toLowerCase() :p1[0].toUpperCase();
    })
    
    return answer;
}