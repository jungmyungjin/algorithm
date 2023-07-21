function solution(N, stages) {
    let stageInfo = {};
    /*   object 초기 설정
    stageInfo : Obejct
    key : stage + '스테이지 번호'
    {
        stage : 스테이지 번호
        tryUsers : 도달하였으나 아직 클리어 못한 플레이어 수
        completed : 스테이지를 돌파한 플레이어 수
        failureRate: 실패율
    }
    */
    for (let i=1; i<=N+1; i++){
         stageInfo['stage'+i] = {tryUsers: 0, 'stage' : i, completed:0, failureRate:0};
    }
    
    // stageInfo[key].tryUsers 속성 값 입력
    for (let e of stages){
        stageInfo['stage'+e].tryUsers++;        
    }

    // stageInfo[key].'completed' 속성 값 입력
    for(e in stageInfo)
    {
        for (let i = 1; i < stageInfo[e].stage; i++)
        {
            // console.log(i);
            stageInfo['stage'+i].completed += stageInfo[e].tryUsers;
        }
    }
        
    
    // stageList : 'stageInfo'의 stage1 ~ stageN 까지의 데이터를 Array 형태로 바꾼 값
    let stageList = [];
    for (e in stageInfo)
    {
        // stageInfo[key].'failureRate' 속성 값 입력
        stageInfo[e].failureRate =  stageInfo[e].tryUsers/(stageInfo[e].completed+stageInfo[e].tryUsers);
        // stage1 ~ stageN 까지의 데이터를 Array형태로 입력
        if (stageInfo[e].stage !== N+1)
            stageList.push(stageInfo[e]);
    }

    // 정렬
    const sotred = stageList.sort((a,b)=> {
        // 값이 동일 한 경우 stage 값 오름차순
        if (a.failureRate === b.failureRate)
        {
            return a.stage - b.stage;
        }    
        // 실패율 내림차순
        return b.failureRate - a.failureRate
    });
    
    
    return sotred.map(e=>e.stage);
}