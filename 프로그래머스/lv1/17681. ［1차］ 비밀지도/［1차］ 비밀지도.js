function solution(n, arr1, arr2) {
    var answer = [];
    let result =  Array.from({length:n}, ()=>Array(n).fill(' '));
let mapFragment = Array.from({length:2}, ()=> Array.from({length:n}, ()=>Array.from({length:n}, ()=> '0')));
        
    // 이진수 분리
    [arr1, arr2].forEach((map,idx) =>{
        for (let line = 0; line < map.length; line++)
        {
            let binLine = map[line].toString(2).padStart(n, '0');
            for (let i=0; i < n; i++)
            {
                mapFragment[idx][line][i] = binLine.charAt(i);
            }
        }
                
    })
        
    // 지도 합체
    for (let map of mapFragment)
    {
        for(let row=0; row<map.length; row++)
        {
            for(let col=0; col<map[row].length;  col++)
            {
                if(map[row][col] === '1')
                {
                    result[row][col] = '#'
                }

            }
            answer[row] = result[row].join('');
        }
    }
    
        console.log(result);

    
    
    // console.log( result);
    return answer;
}