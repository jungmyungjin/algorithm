function solution(before, after) {
    const sort_before = before.split('').sort();
    const sort_after = after.split('').sort();
    
    console.log(sort_before, sort_after)

    if (sort_before.join('') === sort_after.join(''))
        return 1
    return 0;
}
