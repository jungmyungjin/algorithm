function solution(n) {
    var answer = 1;

    
    // 피보나치 수열
    const arr = [0, 1];
    
    for(let i=0; i<n; i++)
    {
        arr[0]  %= 1234567;
        arr[1]  %= 1234567;
        const sum = arr[0] +arr[1] % 1234567;
        
        arr[0] = arr[1];
        arr[1] = sum;
    }
    return arr[1] % 1234567;
}