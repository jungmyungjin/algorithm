function solution(s) {
    var answer = [];
    
    for(let i=0; i < s.length; i++)
    {
        const endSlice = i-1 < 0 ? 0 : i - 1;
        let separation = s.slice(0, i).split('');
        separation = separation.reverse();
        let distance = 0;
        for (j=0; j< separation.length; j++)
        {
            if (separation[j] === s[i]){
                distance = j+1;
                break;
            }
        }
        distance = distance === 0 ? -1 : distance;
        answer.push(distance);
    }
    
    return answer;
}