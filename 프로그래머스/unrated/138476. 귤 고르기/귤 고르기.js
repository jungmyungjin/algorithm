function solution(k, tangerine) {    
    // 분류
    const classification = {};
    for (const size of tangerine)
    {
        if (!classification[size])
            classification[size] = 0;
        classification[size]++
    }
    
    // 갯수 순서대로 정렬
    const values =  Object.values(classification);
    values.sort((a,b)=>b-a);    

    // 귤 고르기
    let minimun_of_kind = 0;
    for(let count of values)
    {
        k -= count;
        minimun_of_kind++;
        if (k <= 0)
            return minimun_of_kind;
    }
    
    
    return 0;
}