function solution(k, dungeons) {
  let answer = [];
  let visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (current[0] <= k && !visited[i]) {
        visited[i] = true;
        dfs(count + 1, k - current[1]);
        visited[i] = false;
      }
    }
  }

  dfs(0, k);

  return Math.max(...answer);
}