function distance_gap (num, hand_point)
{    
    [num,hand_point] = [num,hand_point].map((n)=>{
        n = n ==='*' ? 10 : n;
        n = n === 0 ? 11 : n;
        n = n ==='#' ? 12 : n;
        return n;
    })
    const [bigger,smaller] = num < hand_point ? [hand_point,num] : [num,hand_point];
    return Math.floor(((bigger-smaller)/3))+((bigger-smaller)%3)
}

function find_nearest_hand({num,left,right,hand,answer})
{
    // num과 left와의 거리
    const left_gap = distance_gap(num, left);
    const right_gap = distance_gap(num, right);
    if (left_gap === right_gap)
    {
        if (hand === 'right')
        {
            answer+= 'R';
            right = num;
        }
        else{
            answer+= 'L';
            left = num;
        }
    }
    else if (left_gap > right_gap)
    {
        answer+= 'R'
        right = num;
    }
    else{
        answer+="L"
        left = num;
    }
    
    return [left, right, answer];
}

function solution(numbers, hand) {
    var answer = '';
    
    let [left, right] = ['*','#']
    for (const num of numbers)
    {
        console.log(num)
        if ([1,4,7].includes(num) || num === left)
        {
            answer += 'L'
            left = num;
        }
        else if ([3,6,9].includes(num) || num === right)
        {
            answer += 'R'
            right = num;
        }
        else 
        {
            [left, right, answer] = find_nearest_hand({num,left,right,hand,answer})

        }
        console.log(num,"left="+left,"right="+right)
    }
    return answer;
}

















// // 예전에 푼 것
// const distance = {
//     "13": {
//         2: 1,
//         5: 2,
//         8: 3,
//         0: 4
//     },
//     "46": {
//         2: 2,
//         5: 1,
//         8: 2,
//         0: 3
//     },
//     "79": {
//         2: 3,
//         5: 2,
//         8: 1,
//         0: 2
//     },
//     "*#": {
//         2: 4,
//         5: 3,
//         8: 2,
//         0: 1
//     },
//     "2":{
//         2: 0,
//         5: 1,
//         8: 2,
//         0: 3
//     },
//     "5":{
//         2: 1,
//         5: 0,
//         8: 1,
//         0: 3
//     },
//     "8":{
//         2: 2,
//         5: 1,
//         8: 0,
//         0: 1
//     },
//     "0":{
//         2: 3,
//         5: 2,
//         8: 1,
//         0: 0
//     },
// }
// let left_hand="*";
// let right_hand="#";

// function center_button(number, hand)
// {
//     let left_distance = 0;
//     let right_distance = 0;

//     // 거리 측정
//     for (key in distance)
//     {
//         if (key.includes(left_hand))
//             left_distance = distance[key][number];
//         if (key.includes(right_hand))
//             right_distance = distance[key][number];
//     }

//     if (left_distance == right_distance)
//     {
//         if (hand == "right")
//         {
//             right_hand = number;
//             return ("R");
//         }
//         else
//         {
//             left_hand = number;
//             return ("L");
//         }
//     }
//     else if(left_distance < right_distance)
//     {
//         left_hand = number;
//         return ("L");
//     }
//     else if (left_distance > right_distance)
//     {
//         right_hand = number;
//         return ("R");
//     }
// }

// function push_button(number, hand)
// {
//     if ("2580".includes(number))
//     {
//         return (center_button(number, hand));
//     }
//     else if ("147*".includes(number))
//     {
//         left_hand = number;
//         return ("L");
//     }
//     else if ("369#".includes(number))
//     {
//         right_hand = number;
//         return ("R");
//     }

// }

// function solution(numbers, hand) {
//     hand = hand.toLowerCase();
//     var answer = '';
//     numbers.forEach((number)=>{
//         if ("0123456789".includes(number))
//             answer = answer + push_button(number, hand);
//     })
//     return answer;
// }