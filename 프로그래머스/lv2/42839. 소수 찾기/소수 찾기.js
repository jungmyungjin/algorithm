function isPrime(num)
{
    // TODO : 주어진 숫자들 다 소수만 구하면 끝임
    let result = true;
    
    for(let i = 2; i <= Math.sqrt(num); i++)
    {
        if(num % i ===0)
        {
            result = false;
            break;
        }
    }
    return result;
}

function permutation(nums, length)
{
    if (length === 1)
    {
        return nums.map(e=>[e]);
    }
    let result = [];
    for(let i=0; i<nums.length; i++)
    {
        const fix = nums[i];
        const rest = [...nums.slice(0,i), ...nums.slice(i+1,)];
        // console.log(nums, "fix="+fix, "rest="rest)
        // const rest_front = nums.slice(0,i);
        // const rest_back = nums.slice(i,);
        const combine = permutation(rest, length-1);
        // console.log("fix="+fix,"combine",combine);
        let res = combine.map(e=>[fix, ...e]);
        // console.log("fix="+fix,"res",res);
        // console.log(res);
        result = [...result, ...res];
        // result.push(combine.map(e=>[fix, ...e]));
        // console.log("result",result);
    }
    return result;
}

function solution(numbers) {
    var answer = 0;
    
    numbers = numbers.split("");
    let combine = [];
    for(let i=1; i<=numbers.length; i++)
    {
        const perm = permutation(numbers,i);
        perm.forEach((n)=>{
            const attach = parseInt(n.join(''));
            combine.push(attach); 
        });
    }
    // console.log(combine);

    combine = new Set(combine);
    combine = [...combine];
    
    for(let num of combine)
    {
        if (num < 2)
            continue;
        if (isPrime(num))
            answer++;
    }
    
    // const result = permutation([1,2,3,4,5],2);

    
    // console.log(result);
    return answer;
}