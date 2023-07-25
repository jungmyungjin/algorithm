



function solution(s){
    let stacks = [];

    for (let i=0; i<s.length; i++)
    {
        if ( s[i] === ')' && stacks.length === 0)
        {
            return false;
        }
        
        if (s[i] ==='(')
        {
            stacks.push('1');
        }
        else if (s[i] === ')' && stacks.length > 0)
        {
            stacks.pop();
        }
    }
    if (stacks.length !== 0)
        return false;
    

    return true;
}