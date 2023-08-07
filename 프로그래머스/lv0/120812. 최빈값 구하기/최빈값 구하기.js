function solution(array) {
    
    const obj = {};
    
    for(let num of array)
    {
        if(num in obj)
            obj[num]++;
        else
            obj[num] = 1;
    }

    const values = Object.values(obj);
    
    let [maxKey, maxValue] = [0, 0];
    for (let key in obj)
    {
        if (obj[key] > maxValue)
        {
            maxValue = obj[key];
            maxKey = parseInt(key);
        }
    }
    if (values.filter((num)=> num === maxValue).length > 1)
        return -1;
    
    return maxKey;
}