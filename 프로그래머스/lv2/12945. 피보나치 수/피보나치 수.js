function solution(n) {
    var answer = 0;
    let storage = [0,1];
    for(let idx = 2; idx <= n; idx++)
    {
        storage.push((storage[0] + storage[1]) % 1234567);
        storage.shift();
    }
    answer = storage[1];
    return answer;
}