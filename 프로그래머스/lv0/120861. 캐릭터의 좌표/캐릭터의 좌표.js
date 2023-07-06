function solution(keyinput, board) {
    var answer = [];
    let [x, y] = [0, 0];
    for (let key of keyinput)
    {
        if (key === 'left')
            x -=1;
        else if (key === 'right')
            x += 1;
        else if (key === 'up')
            y+=1;
        else if (key === 'down')
            y-=1;
        x = Math.abs(x) > (board[0] - 1) / 2 ? x/Math.abs(x)* (board[0] - 1) / 2 : x;
    y = Math.abs(y) > (board[1] - 1) / 2 ? y/Math.abs(y)* (board[1] - 1) / 2 : y; 
    }
    
    return [x,y];
}