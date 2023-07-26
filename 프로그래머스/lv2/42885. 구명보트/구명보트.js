function solution(people, limit) {
    var answer = 0;
    let sortedPeople = people.sort((a,b)=> a-b);
    
    let sum = 0
    
    while(sortedPeople.length)
    {

        let biggest = sortedPeople.pop();
        let sum = biggest;
        while(sortedPeople.length && sum + sortedPeople[0] <= limit)
        {
            const smallest = sortedPeople[0];
            sum += sortedPeople.shift();
        }
        answer++
        // console.log(biggest, sum
    }
    
    
    return answer;
}