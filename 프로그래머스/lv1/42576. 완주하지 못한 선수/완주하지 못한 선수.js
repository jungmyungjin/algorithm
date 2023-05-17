function solution(participant, completion) {
    var answer ='';
    let participants = {};
    
    // 플레이어 해시화
    for (let i=0; i<participant.length; i++)
    {
        if (participants.hasOwnProperty(participant[i]))
        {
            participants[participant[i]] += 1;

        }
        else
        {
             participants[participant[i]] = 1;

        }
    }

    
    // 완주한 플레이어 체크
    for (let i=0; i<completion.length; i++)
    {
        participants[completion[i]] -= 1;
        if (participants[completion[i]] === 0)
        {
            delete participants[completion[i]];
        }
    }
    answer = Object.keys(participants).join('');
    
    
    return answer;
}