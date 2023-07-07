function solution(s) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    let result = s;
    
    numbers.forEach((e,idx)=>{
        result = result.replaceAll(e, idx);
    })
return parseInt(result);

}













/* 예전 문제 풀이
function solution(s) {
    // 제한 범위 밖 예외 처리
    if(s.length < 1 || 50 < s.length)
        return (0);
    // s가 "zero"또는 "0으로 시작하는 경우" 예외 처리
    if (s[0] == "0" || s.slice(0, 4) == "1234")
        return (0)
    var answer = s;
    numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    numbers.forEach((element, index, array)=>{
        let regex = new RegExp(element, "gi");
        answer = answer.replace(regex,index);
    });
    
    // 진짜 숫자로 이루어져 있는지 확인
    if (isNaN(answer) == false)
        answer = Number(answer);
    return answer;
}
*/