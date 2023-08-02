function solution(s) {
    var answer = [];
    let binary_string = s;
    let total_zero = 0;
    let total_count = 0;
    
    while( binary_string !== '1')
    {
        const arr = binary_string.split('');
        const zero = arr.reduce((total,current)=>total+=current==='0'? 1 : 0,0)
        const remove_length = arr.length-zero;
        total_zero += zero;
        ++total_count;
        binary_string = remove_length.toString(2);
    }
    return [total_count, total_zero]
}