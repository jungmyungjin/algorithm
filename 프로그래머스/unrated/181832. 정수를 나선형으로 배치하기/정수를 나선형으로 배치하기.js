


function solution(n) {
    let answer = Array.from({length:n}, ()=>Array.from({length:n},()=>0));


    let [i,j] = [0,0];
    let number = 1;

    while(i<n && j<n)
    {
        if (answer[i][j] !== 0)
            break;
        // 숫자 입력
        answer[i][j] = number;
        
        const right = j < n-1 ? answer[i][j+1] : 1;
        const left = 0 <= j-1 ? answer[i][j-1] : 1;
        const up =  0 <= i-1 ?  answer[i-1][j] : 1;
        const down = i < n-1 ? answer[i+1][j] : 1;                                   

        // 다음에 올 숫자 구하기
        // 우선순위 1) 가로 오른쪽 방향: 왼쪽 끝인 경우 or 왼쪽에 있는 숫자가 0이 아니고, 오른쪽 숫자가 0인 경우
        if ((i===0 || up !== 0) && right === 0)
        {            j++;
        }
        // 우선순위 2) 세로 아래 방향: 오른쪽 끝인경우 or 왼쪽에 있는 숫자가 0이 아니고, 오른쪽에 있는 숫자가 0이 아니고, 아래가 0 인 경우
        else if ( (i === 0 || up !== 0) && down === 0)
        {
            i++;
        }
        // 우선순위 3) 가로 왼쪽 방향: 세로 끝&왼쪽 끝인 경우 or 
        //          위에 있는숫자가 0이아니고, 아래에 있는 숫자가 0인경우 and 오른쪽에 있는 숫자가 0이아니고 왼쪽에 있는 숫자가 0인경우
        else if (left === 0  && right !== 0 )
        {
            j--;
        }
        // 우선순위 4) 세로 위 방향: 왼쪽 끝인경우
        else if((i === n-1 || down !== 0) && up === 0)
        {
            i--;
        }
        number++;
    }

    return answer;
}