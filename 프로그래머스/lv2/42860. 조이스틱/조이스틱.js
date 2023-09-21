function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  [...name].map((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;

    // 연속되는 A의 개수 count
    while (idx < name.length && name[idx] === 'A') {
      idx++;
    }

    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx),
    );
  });

  return answer + min_move;
}




///
// 내가 도전한 코드..
//
// function getCount(end)
// {    
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const end_idx = alphabet.indexOf(end) + 1;
//     if (13 < end_idx)
//         return  (26 - end_idx) + 1;
//     else
//         return end_idx - 1;
// }


// function solution(name) {
//     var answer = 0;
    
//     // A의 연속된 경우의 숫자를 구함
//     let a = [0,0,0]; // max, start idx, end idx;
//     let max_a = [], startIdx = 0, endIdx = 0;
//     for(let i=0; i<name.length; i++)
//     {
//         if (name[i] === 'A')
//         {
//             max_a++;
//             endIdx = i;
//         }
//         else
//         {
//             if (a[0] < max_a)
//                 a = [max_a, startIdx ,endIdx];
//             startIdx = i+1;
//             max_a = 0;
//         }
//     }

//     name = name.split("");
//     let change_count = 0;
//     for(let i=0; i<name.length; i++)
//     {
//         let rest = name.slice(i+1);
//         if (rest.length !== 0 && rest.every(e=>e==='A'))
//             break;
//         const move =  getCount(name[i]);
//         // console.log("name[i]="+name[i], move);        
//         change_count += move;
//     }
    
//     // 연속된 A 가 처음부터 있는 경우 => 커서를 오른쪽으로 이동한다.
//     if (a[0]!== 0 && a[1] === 0)
//     {
//         return change_count + name.length - a[0];
//     }
//     // 연속된 A 길이가, 그 전 숫자보다 큰 경우 계산
//     // 앞 수 + 뒤 수 < A의 길이 
//     const front = (a[1]-1) * 2; // 왕복으로 갔다 오는 시간
//     const back = name.length - a[0] - a[1];
//     if (front+back < a[0])
//         return change_count + front+back;
    
    
//     return  change_count + name.length - 1 - a[0];
// }