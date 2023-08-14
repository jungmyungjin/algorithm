function solution(num, total) {    
    const startNum = Math.ceil(total/num)-Math.ceil(num/2);
    const endNum = Math.ceil(total/num)+Math.ceil(num/2);
 
    for(let i=startNum; i<=endNum;  i++)
    {
        let arr = [];
        for(let j=0; j<num; j++)
        {
            arr.push(i+j);
        }
        if (total === arr.reduce((result, curr)=>result+=curr,0))
        {
            return arr;
        }
        
    }
    
    return null;
}