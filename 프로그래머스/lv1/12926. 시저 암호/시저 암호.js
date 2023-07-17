function solution(s, n) {
    var answer = '';
    
    for(let i = 0; i < s.length; i++)
    {
        const originASCII = s[i].charCodeAt();
        const changeASCII = s[i].charCodeAt() + n;
        let startNumber = 0;
        // 대문자
        if ( 65 <= originASCII && originASCII <= 90)
            startNumber = 65;            
        // 소문자
        else if ( 97 <= originASCII && originASCII <= 122)
            startNumber = 97;
        else
            {
                answer += s[i];
                continue;
            }
        const alphabetIdx = (changeASCII % startNumber) % 26;
        const caesarChar = String.fromCharCode(startNumber + alphabetIdx);
        console.log(alphabetIdx , caesarChar)
        answer += caesarChar;
    }
    
    return answer;
}