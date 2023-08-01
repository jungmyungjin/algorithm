// 약수 구하기
function getFactors (number)
{
    const result = [];
    
    if(number === 1)
        return [[1,1]]
    
     for (let i = 1; i ** 2 <= number; i++) {
        if (number % i == 0) {
            result.push([number / i, i]);
        }
    }
    return result;
}



function solution(brown, yellow) {
    var answer = [];
    
    const yellow_list = getFactors(yellow);    
    for(let cases of yellow_list)
    {
        let [x, y] = cases;
        if ((x+2)*(y+2) - (x*y) === brown)
            return [x+2,y+2];

    }
    return [];
}