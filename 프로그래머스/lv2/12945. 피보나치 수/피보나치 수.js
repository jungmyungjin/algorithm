function solution(n) {
    var answer = 0;
    
    let num1=1
    let num2=1;
    
   
    for (let i =2; i<n; i++)
    {
        let [n1,n2] = [num1, num2];
        num1 = n2;
        num2 = (n1+n2) % 1234567;
    }
    return num2 ;
}


// function solution(n) {
//     var answer = 0;
//     let storage = [0,1];
//     for(let idx = 2; idx <= n; idx++)
//     {
//         storage.push((storage[0] + storage[1]) % 1234567);
//         storage.shift();
//     }
//     answer = storage[1];
//     return answer;
// }