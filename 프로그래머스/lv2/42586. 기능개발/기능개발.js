function solution(progresses, speeds) {
    let answer = [];
    let [working,workload] = [progresses, speeds];
    if (progresses.length !== speeds.length)
        return answer;
    
    while(working.length){
        if (working[0] >= 100){ // 배포
            // finshed : 배포 완료된 기능
            let finshed = [];
            while(working[0] >= 100)
            {
                finshed.push(working.shift());
                workload.shift();
            }
            console.log(working)
            answer.push(finshed.length); // 배포 시점 완료된 작업 추가
        }
        // ~기능 개발~
        working = working.map((data,idx)=>data+workload[idx]);
    }
    
    
    return answer;
}