function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = Array(bridge_length).fill(0);
    while (true)
    {
        // 현재 차들 무게를 계산한다.
        const currentWeight = bridge.reduce(((prev,cur,idx)=>prev+cur),0);
        if (currentWeight === 0 && truck_weights.length === 0)
        {
        break;
        }
        //현재 다리 무게 + 새로운 차 무게 < 총량  && 현재 다리에 차가 하나 들어올 여유가 있는 경우
        if (currentWeight + truck_weights[0] <= weight  && bridge[0]===0)
            {
                // 새로운 차를 영입
                // 맨 앞에 있는 도로가 한칸씩 밀림
                bridge.push(truck_weights.shift())
                bridge.shift();
            }
        //현재 다리에 차가 한칸씩 땡겨도, 도로에 나갈 차가 없는 경우
        else if (bridge[0] === 0)
            {
                // 기존 차들을 한칸씩 앞으로
                //  새로운 도로는 0으로 채워둠
                 bridge.push(0);
                bridge.shift();
            }
        // 현재 다리에 여유가 한칸씩 땡겼을 때, 도로에 나가는 차가 있는 경우, 이때 새로운 차가 들어올 여유도 있는 경우
        else if (bridge[0] !== 0 && currentWeight-bridge[0]+truck_weights[0] <= weight)
            {
                // 기존 차들을 한칸씩 땡김
                // 맨앞에 있는 차가 빠짐
                 bridge.push(truck_weights.shift())
                bridge.shift();
            }
        else
            {
                 bridge.push(0);
                bridge.shift();
            }
        answer++
    }
    
    return answer;
}