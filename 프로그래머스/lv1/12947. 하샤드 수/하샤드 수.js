function solution(x) {
    var answer = true;
    let sum = 0;
    const originX = x;

    while(1 <= x)
    {
        sum += x % 10;
        x =  Math.floor(x / 10);
    }
    
    return originX % sum === 0 ? true : false;
}