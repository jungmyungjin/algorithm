// 해당 갯수의 조합을 구한다.
function getCombine(numbers, combine_count)
{
    if (1 === combine_count)
        return numbers.map(num=>[num]);
    
    let total = [];
    for(let i=0; i<numbers.length; i++)
    {
        const fix = numbers[i];
        const rest = numbers.slice(i+1,);
        
        // 경우의 수를 더함
        let result = getCombine(rest, combine_count-1); 
        
        // 조합
        const combine = result.map((num)=>[fix,...num]);
        total.push(...combine);

    }
    
    return total;
    
}



function solution(numbers, target) {
    var answer = 0;
    
    let idx_list = numbers.map((num,idx)=>idx);
    // let result = getCombine(numbers, 3);
    // console.log(result);
    
    // 전부 더 하는 경우 같은지
    if(numbers.reduce((total,cur)=>total+=cur, 0) === target)
    {
        answer++;
    }
    
    let combines = [];
    for(let i=1; i<=target; i++)
    {
        // result[j] = - 할 index 들
        let result = getCombine(idx_list, i);        
        for(let j=0; j<result.length; j++)
        {
            // result[j] 에 해당하는 index가 -인 경우에 값이 매칭되는지 확인
            if(numbers.reduce((total,cur,idx)=>result[j].includes(idx) ? total -= cur : total += cur, 0) === target)
            {
                answer++;
            }

        }
        
    }
    
    
    return answer;
}