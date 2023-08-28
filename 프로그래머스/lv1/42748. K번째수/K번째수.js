function solution(array, commands) {
    var answer = [];
    
    commands.forEach((nums)=>{
        const sliced = array.slice(nums[0]-1, nums[1]);
        sliced.sort((a,b)=>a-b);
        answer.push(sliced.at(nums[2]-1));
    })
    return answer;
}

// 이전 코드
// function solution(array, commands) {
//     var answer = [];

//     commands.forEach((element)=>{
//         const tmp = array.slice(element[0]-1,element[1]);
//         tmp.sort((a,b)=>{return a-b});
//         answer.push(tmp[element[2]-1]);
//     });
//     return answer;
// }