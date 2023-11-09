function solution(rank, attendance) {
    var answer = 0;
    let count = 0;
    let students = [];
    
    for(let i=0; i<rank.length && count < 3; i++)
    {
        for(let j=0; j<rank.length; j++)
        {
            if (i === rank[j]-1 && attendance[j]){
                students.push(j);
                count++;
                break;
            }
        }
    }    
                
    return     students[0] * 10000 + students[1] * 100 + students[2];
}