function solution(nums) {
    const setNums = new Set(nums);
    const typeCount = [... setNums].length;
    
    
    return nums.length/2 >= typeCount ? typeCount: nums.length / 2;
}