function solution(skill, skill_trees) {
    let counter = 0;
    for(let tree of skill_trees)
    {
        let skill_pointer = 0;
        let isPossible = true;
        for(let i=0; i<tree.length; i++)
        {
            const my_pointer = skill.indexOf(tree[i]);
            
            if(my_pointer === -1)
                continue;
                        
            if(skill_pointer === my_pointer)
            {
                skill_pointer++;
            }
            else
            {
                isPossible = false;
                break;
            }
        }
        if(isPossible)
        {
            counter++;
        }

    }
    
    return counter;
}