function solution(n,a,b)
{
    let count = 0;
    while(a !== b)
    {
        a = Math.round(a/2);
        b = Math.round(b/2);
        count++;
    }
    return count
}