function solution(dots) {
    // 정렬
    // 예) [[1, 1], [2, 2], [2, 1], [1, 2]]
    //     => [[1, 1], [1, 2], [2, 1], [2, 2],]
    dots.sort((a,b)=>a[0]===b[0] ? a[1] - b[1] :a[0] - b[0]) ;
    const width = dots[3][0] - dots[0][0];
    const height = dots[3][1] - dots[0][1];
    
    return width * height;
}