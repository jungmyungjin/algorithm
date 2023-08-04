function solution(board) {
    var answer = 0;
    const width = board[0].length;
    const height = board.length; 
        console.log(board, width,height)

    for(let y=0; y<height; y++)
    {
        for(let x=0; x<width; x++)
        {
            const around = Array.from({length:4}, e=>0);
            around[4] = board[y][x]; //center
            if(around[4] !== 1)
                continue;
            
            
            const left = x-1 < 0 ? 0 : x-1;
            const right = x+1 >= width? width-1 : x+1;
            const up = y-1 < 0? 0 : y-1;
            const down = y+1 >= height ? height-1 : y+1;

            if (board[up][left] === 0 ) // 1
                board[up][left] = 2;
            if (board[up][x] === 0 )  // 2
                board[up][x] = 2;
            if (board[up][right] === 0 ) // 3
                board[up][right] = 2;
            
            if (board[y][left] === 0 ) // 4
                board[y][left] = 2;
            if (board[y][right] === 0 ) // 6
                board[y][right] = 2;
            
            if (board[down][left] === 0 ) // 7
                board[down][left] = 2;
            if (board[down][x] === 0 ) // 8
                board[down][x] = 2;
            if (board[down][right] === 0 ) // 9
                board[down][right] = 2;
        }
    }
    
    for(let row of board)
    {
        answer+= row.reduce((total, current)=> total+=current === 0? 1 : 0,0);
    }
    
    return answer;
}