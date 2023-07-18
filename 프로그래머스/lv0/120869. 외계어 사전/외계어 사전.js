function solution(spell, dic) {    
    
    const sortDic = dic.map( (word) => word.split('').sort().join('') );
    const sortSpell = spell.sort();
        
    for(let i=0; i<sortDic.length; i++)
    {
        if (sortSpell.join('') === sortDic[i])
        {
            return 1;        
        }
    }
    
    return 2;
}