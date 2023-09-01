function solution(board, moves) {
    var answer = 0;
    
    let columns = Array.from({length: board[0].length},()=>Array.from({length:board.length}, ()=>0));
        
    // 오른쪽으로 90도 돌림, pop하기 쉽게
    for(let i=0; i<board.length; i++)
    {
        const column_last_idx = board[i].length-1;
        for(let j=0; j<board[i].length; j++)
        {
            columns[j][board.length-1-i] = board[i][j];
        }
    }
    
    
    // 크레인 뽑기
    let basket = [];
    for(let row of moves)
    {
        let popNum=0;
        while(popNum === 0 && columns[row-1].length > 0)
        {
            popNum = columns[row-1].pop();
        }
        basket.push(popNum);
    }
    
    // 중복 숫자 제거하기
    let stack = [];
    for(let num of basket)
    {
        stack.push(num);
        if(2 <= stack.length && stack[stack.length-2] === stack[stack.length-1] && stack[stack.length-1]!== 0 )
        {
            stack = stack.slice(0,stack.length-2);
            answer++;
        }

    }

    return answer*2;
}