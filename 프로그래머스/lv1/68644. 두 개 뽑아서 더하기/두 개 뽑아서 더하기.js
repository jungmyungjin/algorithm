// 
function getCombinations(numbers, select)
{
    if(select === 1)
    {
        return numbers.map((e)=>[e]);
    }
    const result = [];
    numbers.forEach((element, idx, array)=>
    {
        const rest = array.slice(idx+1);
        const combis = getCombinations(rest, select-1);
        const mix = combis.map(arr=>[element, ...arr]);
        result.push(...mix);
    }
    );
     return result;    
}


function solution(numbers) {
    var answer = [];
    // 두 짝씩 조합 생성
    const pairNums = getCombinations(numbers, 2);
    
    // pairNums = 두 숫자의 값을 더한 값을 배열로
    pairNums.forEach((pair)=>{
        answer.push(pair[0]+pair[1]);
    })
    
    // 중복 제거
    const setAnswer = new Set(answer);
    answer = [...setAnswer];
    
    // 오름차순 정렬
    answer.sort((a,b)=>a-b);

    return answer;
}