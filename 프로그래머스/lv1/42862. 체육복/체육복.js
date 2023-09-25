function solution(n, lost, reserve) {
    var answer = 0;
    let students = Array.from({length:n},()=>1);
    
    reserve.forEach(num=>students[num-1]++);
    lost.forEach(num=>students[num-1]--);
    
    
    for(let i=0; i<students.length; i++)
    {
        if (students[i] === 0) 
        {
            // 이 전 학생에게 빌린다.
            if(0 <= i-1 && students[i-1] === 2)
                answer++ , students[i-1]--;
            // 다음 학생에게 빌린다.
            else if(i+1 < students.length &&  students[i+1] === 2)
               answer++ , students[i+1]--;

        }
        else
            answer++;
    }

    return answer;
}


// // 체육복 상태 확인
// function check_status_gym_clothes(n, lost, reserve)
// {
//     let table = [];
//     // 학생별 체육복 배분
//     for(let index = 0; index < n; index++)
//         table.push(1);
//     // 여벌 체육복 배분
//     reserve.forEach((element)=>{
//         element -= 1;
//         if (table[element] != null && table[element] != undefined)
//             table[element] += 1;
//     });
//     // 체육복 도난
//       lost.forEach((element)=>{
//           element -= 1;
//         if (table[element] != null && table[element] != undefined && table[element] >= 1)
//             table[element] -= 1;
//     });
    
//     return (table);
// }

// // 체육복 나눔
// function share_gym_clothes(clothes_array_table)
// {
//     clothes_array_table.forEach((element, index, array)=>{
//         // 이전 학생에게 빌릴 수 있는지 확인
//         if (element == 0 && 0 <= index - 1 && clothes_array_table[index - 1] == 2)
//             {
//                 clothes_array_table[index - 1] -= 1;
//                 clothes_array_table[index] += 1;
//             }
//         // 다음 학생에게 빌릴 수 있는지 확인
//         else if (element == 0 && index + 1 < array.length && clothes_array_table[index + 1] == 2)
//             {
//                 clothes_array_table[index + 1] -= 1;
//                 clothes_array_table[index] += 1;
//             }
            
//     })
//     return (clothes_array_table);
// }

// // 체육복이 있는 사람 카운팅
// function counting_gym_clothes(clothes_array_table)
// {
//     let have_clothes = 0;
    
//     clothes_array_table.forEach((element)=>{
//         if (element > 0)
//             have_clothes += 1;
//     })
//     return have_clothes;
// }


// function solution(n, lost, reserve) {
//     var answer = 0;
//     let clothes_array_table;
    
//     clothes_array_table = check_status_gym_clothes(n, lost, reserve);
//     clothes_array_table = share_gym_clothes(clothes_array_table);
//     answer = counting_gym_clothes(clothes_array_table);
    
//     return answer;
// }