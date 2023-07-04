function solution(A, B) {
    const length = A.length;
    let arr = A.split('');
    
    if (A === B )
        return 0;
    
    // 뒤로
    let back = 0;
    for (let i=0; i<length+1; i++)
    {
        arr.unshift(arr.pop());
        back++;
        if (arr.join('')===B)
            return back;
    }
    
   
    return -1;
}