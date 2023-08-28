function solution(progresses, speeds) {
    
    const time_taken = Array.from({length :progresses.length}, ()=>0);
    progresses.forEach((progress, idx)=>{
        while(progress < 100)
        {
            time_taken[idx]++;
            progress += speeds[idx];
        }
    })
    
    console.log(time_taken)
    const answer = [];
    let [max_day, count_day] = [0,0];
    for(let day of time_taken)
    {
        // 제일 큰 날짜보다 크면, 배포
        if (max_day < day)
        {
            if (max_day !== 0) answer.push(count_day);
            max_day = day;
            count_day = 1;
        }
        else{
            count_day++;
        }
    }
    answer.push(count_day)

    
    return answer;
}

// 이전에 푼 내용
// function solution(progresses, speeds) {
//     let answer = [];
//     let [working,workload] = [progresses, speeds];
    
//     while(working.length){
//         if (working[0] >= 100){ // 배포
//             // finshed : 배포 완료된 기능
//             let finshed = [];
//             while(working[0] >= 100)
//             {
//                 finshed.push(working.shift());
//                 workload.shift();
//             }
//             answer.push(finshed.length); // 배포 시점 완료된 작업 추가
//         }
//         // ~기능 개발~
//         working = working.map((data,idx)=>data+workload[idx]);
//     }
    
    
//     return answer;
// }