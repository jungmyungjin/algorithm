function check_prime(number)
{
    for (let idx = 2; idx <= Math.floor(Math.sqrt(number)) ; idx++)
    {
        if (number % idx == 0)
        {
            return (false);
        }
    }
    return (true);
}

function solution(nums) {
    var answer = 0;
    check_prime();

    const length = nums.length;
    for(let x =0; x < length; x++)
    {
        for(let y = x+1; y < length; y++)
        {
            for (let z = y + 1; z < length; z++)
            {
                if (check_prime(nums[x]+nums[y]+nums[z]))
                    answer += 1;
            }
        }
    }

    return answer;
}