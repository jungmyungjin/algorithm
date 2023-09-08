function solution(record) {
    var answer = [];
    let users = {};
    
    // 최종 닉네임 확인
    for(let info of record)
    {
        const [status,uid, nickname] = info.split(' ');
        if (status !== 'Leave')
            users[uid]=nickname;
    }
    
    for(let info of record)
    {
        const [status,uid] = info.split(' ');
        if(status === 'Enter')
        {
            answer.push(`${users[uid]}님이 들어왔습니다.`);
        }
        else if(status === 'Leave')
        {
            answer.push(`${users[uid]}님이 나갔습니다.`)

        }
    }
    
    return answer;
}