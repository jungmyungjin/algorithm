function solution(s) {
    let count = 0; // 올바른 괄호문자열 세기
    
    if(s.length % 2 !== 0)
        return 0;
    let reverse = s.split('').reverse();
    
    // 회전 0 ~ x 갯수 까지
    for(let x = 0; x < s.length; x++)
    {
        let stack_1 = [...reverse]; // 원본
        for(let i=0; i <x; i++)
        {
            stack_1 = [stack_1.pop(), ...stack_1];
        }
        // console.log(stack_1)

        
        
        // 올바른 괄호 체크
        let stack_2 = []; // 괄호 체크할 때 필요
        let is_right = true;
        while(stack_1.length !== 0)
        {
            // console.log("stack_1:",stack_1, 'stack_2:',stack_2 )
            const braket = stack_1.pop();
            
            if(braket === '(' || braket === '{' || braket === '[')
                stack_2.push(braket);
            else 
            {
                const stack_2_braket = stack_2.pop(); // open 이여야 함
                // console.log("stack_2_braket:",stack_2_braket, 'braket:',braket )

                
                if (stack_2_braket === '(' && braket ===')' ||
                    stack_2_braket === '{' && braket ==='}' || 
                    stack_2_braket === '[' && braket ===']'
                    ){
                    // 올바른 괄호 문자열
                    }
                else{
                    // 올바르지 않은 괄호 문자열 
                    is_right = false;
                    break;
                }

            }
        }
        if(is_right)
            count++;
        // console.log("count=",count);
    }
    
    return count;
}