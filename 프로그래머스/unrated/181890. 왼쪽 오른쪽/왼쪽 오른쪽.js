function solution(str_list) {
    var answer = [];
    let check=0;
    
    if (!str_list.join('').indexOf('lr') || !str_list.join('').indexOf('lr'))
    {
     return [];
    }
    
   
    for(let i=0; i<str_list.length; i++)
    {
        if(str_list[i] === 'l')
        {
            return str_list.join('').slice(0, i).split('');
        }
        else if(str_list[i] === 'r')
        {
            return str_list.join('').slice(i+1).split('');
        }
    }
    
    return [];
}