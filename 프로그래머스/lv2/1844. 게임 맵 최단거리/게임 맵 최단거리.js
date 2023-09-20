// 블로그 참고 정답
// => BFS 방식

function solution(maps) {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const queue = [[0, 0, 1]]; // [y좌표, x좌표, count]

    while (queue.length) {
        const cur = queue.shift();
        // 좌표가 도착 지점일 때, count 를 반환
        if (cur[0] === maps.length - 1 && cur[1] === maps[0].length - 1) {
            return cur[2];
        }
            
        /// 모든 요소 방문
        for (let i = 0; i < 4; i++) {
            const ny = cur[0] + dy[i];
            const nx = cur[1] + dx[i];
            
            // 이동하려는 좌표가 맵 내에 있고, 해당 좌표의 값이 1이라면
            if (nx >= 0 && ny >= 0 && nx < maps[0].length && ny < maps.length && maps[ny][nx] === 1) {
                maps[ny][nx] = 0; // 방문 표시
                queue.push([ny, nx, cur[2] + 1]);    
            }
        }
    }
    
    return -1;
}