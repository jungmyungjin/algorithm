function solution(array, commands) {
    var answer = [];

    commands.forEach((element)=>{
        const tmp = array.slice(element[0]-1,element[1]);
        tmp.sort((a,b)=>{return a-b});
        answer.push(tmp[element[2]-1]);
    });
    return answer;
}