function solution(priorities, location) {
    var answer = 1;
    
    let i = 0;
    while (priorities.length)
    {
        const bigNum = priorities.reduce((total,cur,idx)=> total < cur ? cur : total,0);
        
                  console.log("bigNum, priorities[i], location, i", bigNum, priorities[i], location, i)
                        console.log("before",priorities)

        
        if (bigNum === priorities[location] && location === 0){
            break;
        }
        if (bigNum === priorities[0])
        {
            answer++
            priorities.shift();
        }
        else{
            priorities.push(priorities.shift());
        }
                
        location--;

        i++;
        if (i === priorities.length)
            i = 0;
        if (location === -1)
            location = priorities.length-1;
              

        // console.log("after",priorities)
    }
    
    return answer;
}