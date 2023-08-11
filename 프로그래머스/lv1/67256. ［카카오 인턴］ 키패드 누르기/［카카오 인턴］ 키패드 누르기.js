// function find_nearest_hand({num,left,right,hand,answer})
// {
//     // 같을때 처리
//     if (num === left || num === right)
//     {
//         answer += num === left ? 'L' : 'R';
//         return [left, right, answer];
//     }
    
    
//     // level ['*',0,'#'] => 는 4 레벨
//     const target_level = ['*',0,'#'].includes(num) ? 4 : Math.ceil(num/3);
//     const left_level = ['*',0,'#'].includes(num) ? 4 : Math.ceil(left/3);
//     const right_level = ['*',0,'#'].includes(num) ? 4 : Math.ceil(right/3);
    
//     console.log("level", target_level,Math.abs(target_level-left_level),Math.abs(target_level-right_level))
//     if (target_level === left_level  &&  target_level === right_level)
//     {
//         answer += hand === "right" ? 'R' : 'L';
//         if (hand === 'right')
//             right = num;
//         else
//             left = num;
//     }
//     else if (Math.abs(target_level-left_level) < Math.abs(target_level-right_level))
//     {
//         answer += 'L';
//         left = num;
//     }
//     else if (Math.abs(target_level-right_level) < Math.abs(target_level-left_level))
//     {
//         answer += 'R';
//         right = num;
//     }
    
//     return [left, right, answer];
// }

// function solution(numbers, hand) {
//     var answer = '';
    
//     let [left, right] = ['*','#']
//     for (const num of numbers)
//     {
//         console.log(num)
//         if ([1,4,7].includes(num))
//         {
//             answer += 'L'
//             left = num;
//         }
//         else if ([3,6,9].includes(num))
//         {
//             answer += 'R'
//             right = num;
//         }
//         else 
//         {
//             [left, right, answer] = find_nearest_hand({num,left,right,hand,answer})

//         }
//         console.log(num,"left="+left,"right="+right)
//     }
//     return answer;
// }

















// 예전에 푼 것
const distance = {
    "13": {
        2: 1,
        5: 2,
        8: 3,
        0: 4
    },
    "46": {
        2: 2,
        5: 1,
        8: 2,
        0: 3
    },
    "79": {
        2: 3,
        5: 2,
        8: 1,
        0: 2
    },
    "*#": {
        2: 4,
        5: 3,
        8: 2,
        0: 1
    },
    "2":{
        2: 0,
        5: 1,
        8: 2,
        0: 3
    },
    "5":{
        2: 1,
        5: 0,
        8: 1,
        0: 3
    },
    "8":{
        2: 2,
        5: 1,
        8: 0,
        0: 1
    },
    "0":{
        2: 3,
        5: 2,
        8: 1,
        0: 0
    },
}
let left_hand="*";
let right_hand="#";

function center_button(number, hand)
{
    let left_distance = 0;
    let right_distance = 0;

    // 거리 측정
    for (key in distance)
    {
        if (key.includes(left_hand))
            left_distance = distance[key][number];
        if (key.includes(right_hand))
            right_distance = distance[key][number];
    }

    if (left_distance == right_distance)
    {
        if (hand == "right")
        {
            right_hand = number;
            return ("R");
        }
        else
        {
            left_hand = number;
            return ("L");
        }
    }
    else if(left_distance < right_distance)
    {
        left_hand = number;
        return ("L");
    }
    else if (left_distance > right_distance)
    {
        right_hand = number;
        return ("R");
    }
}

function push_button(number, hand)
{
    if ("2580".includes(number))
    {
        return (center_button(number, hand));
    }
    else if ("147*".includes(number))
    {
        left_hand = number;
        return ("L");
    }
    else if ("369#".includes(number))
    {
        right_hand = number;
        return ("R");
    }

}

function solution(numbers, hand) {
    hand = hand.toLowerCase();
    var answer = '';
    numbers.forEach((number)=>{
        if ("0123456789".includes(number))
            answer = answer + push_button(number, hand);
    })
    return answer;
}