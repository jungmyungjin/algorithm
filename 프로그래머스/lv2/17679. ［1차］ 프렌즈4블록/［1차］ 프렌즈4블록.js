function check_2x2(i, j, arr_board)
{
    const [height, width] = [arr_board.length, arr_board[0].length];
    
    let result = false;
    // 왼쪽 위 체크
    if (0 <= i-1 && 0 <= j-1)
    {
        result = result || [arr_board[i-1][j-1], arr_board[i-1][j], arr_board[i][j-1], arr_board[i][j]].every((value)=> arr_board[i][j].charAt(0) === value?.charAt(0))
    }
    // 오른쪽 위 체크
    if(0 <= i-1 && j+1 < width)
    {
        result = result || [arr_board[i-1][j], arr_board[i-1][j+1], arr_board[i][j], arr_board[i][j+1]].every((value)=> arr_board[i][j].charAt(0) === value?.charAt(0))
    }
    // 왼쪽 아래 체크
    if(i+1 < height && 0 <= j-1)
    {
        result = result || [arr_board[i][j-1], arr_board[i][j], arr_board[i+1][j-1], arr_board[i+1][j]].every((value)=> arr_board[i][j].charAt(0) === value?.charAt(0))
    }
    // 오른쪽 아래 체크
    if(i+1 < height && j+1 < height)
    {
        result = result || [arr_board[i][j], arr_board[i][j+1], arr_board[i+1][j], arr_board[i+1][j+1]].every((value)=> arr_board[i][j].charAt(0) === value?.charAt(0))

    }
    return result;
}

function solution(m, n, board) {
    var answer = 0;
    
    // let arr_board = Array.from({length: board.length}, (value,idx)=>
    //                           board[idx].split(''));
    // push pop 편하게 각도 돌림
     let arr_board = Array.from({length: board[0].length}, (v1, i)=>
                              Array.from({length: board.length}, (v2, j)=> board[board.length-j-1][i]));
    
    
    while(1){
        for(let i=0; i<arr_board.length; i++)
        {
            for(let j=0; j<arr_board[0].length; j++)
            {
                if (arr_board[i][j] === '')
                    break;
                // 좌표를 기준으로 2x2 를 확인
                if(check_2x2(i, j, arr_board))
                {
                    arr_board[i][j] = arr_board[i][j]+0;
                }
            }
        }
        // console.log("체크후 보드");
        // console.log(arr_board);

        // 블록 터져서 내려옴
        let boom = 0;
        for(let i=0; i<arr_board.length; i++)
        {
            const length = arr_board[i].length;
            arr_board[i] = arr_board[i].filter(value => value.length < 2);
            boom += length - arr_board[i].length;
            arr_board[i] = [...arr_board[i], ...Array.from({length: length - arr_board[i].length}, ()=>'')];
        }
        answer += boom;
        if (boom === 0)
            break;
    }
    
    return answer;
}