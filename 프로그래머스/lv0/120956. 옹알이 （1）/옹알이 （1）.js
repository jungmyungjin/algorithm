function solution(babbling) {
    let answer = 0;

    babbling.forEach((sentence,idx,arr)=>{
        let possible = 1;
        for(let i=0; i<sentence.length; i++)
        {
            console.log(sentence[i]);
            if(sentence[i] === 'a' && sentence.indexOf('aya') === i)
            {
                i+=2;
            }
            else if(sentence[i] === 'y' && sentence.indexOf('ye') === i)
            {
                i+=1;
            }
            else if(sentence[i] === 'w' && sentence.indexOf('woo') === i)
            {
                i+=2;
            }
            else if(sentence[i] === 'm' && sentence.indexOf('ma') === i)
            {
                i+=1;
            }
            else{
                possible = 0;
                break;
            }
        }
        answer += possible;
    })
    
    return answer;
}