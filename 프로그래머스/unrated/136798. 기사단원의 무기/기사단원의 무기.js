function divisor(number)
{
    let list = [];
    for(let i=1; i<=Math.sqrt(number); i++)
    {
        if (number % i === 0)
        {
            list.push(i);
            list.push(number/i);
        }
    }
    const uniq = new Set(list);
    list = [...uniq]
    // console.log(list);

    return list.length;
}


function solution(number, limit, power) {
    var answer = 0;
    
    let list = [];
    for(let i=1; i<=number; i++)
    {
        let n_power = divisor(i);
        if (limit < n_power) n_power = power;
        list.push(n_power);
    }
    
    
    return list.reduce((total, cur)=>total+=cur, 0);
}