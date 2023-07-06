function solution(s) {
    var answer = 0;
    let nums = s.split(' ').reverse();
    
    for(let i=0; i<nums.length; i++)
    {
        if (nums[i] === 'Z')
        {
            i +=1;
            continue;
        }
        answer += parseInt(nums[i]);
    }
    return answer;
}