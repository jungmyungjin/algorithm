function solution(number, k) {
    let answer = [];
    
    let bigNum = -1, idx = 0;
    let nums = number.split('');
    for(let i=0; i < nums.length-k; i++)
    {
        bigNum = nums[idx];
        if (bigNum !== '9')
        {
            for(let j=idx+1; j <= k + i; j++)
            {
                // console.log("i="+i, "j="+j, "idx="+idx, "bigNum="+bigNum,  "nums[j]="+nums[j],);
                if (bigNum < nums[j])
                {
                    bigNum = nums[j];
                    idx = j;
                    if (nums[j] === '9')
                        break;
                }
            }
        }
        answer.push(bigNum); // 제일 큰수 입력
        // console.log("answer=",answer);
        idx++;
    }
    
    return answer.join("");
}