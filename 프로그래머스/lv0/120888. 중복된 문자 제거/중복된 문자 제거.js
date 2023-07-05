function solution(my_string) {
    var answer = '';
    
    for (e of my_string)
    {
        const position = answer.indexOf(e);
        if (-1 === position)
        {
            answer += e;
        }
    }


    
    
    return answer;
}