function solution(nums) {
    var answer = 0;
    let max = Math.floor(nums.length / 2);
    let set = new Set(nums);
    let kind = [...set];
    console.log(kind)
    
    return kind.length > max ? max: kind.length;
}