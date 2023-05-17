function solution(participant, completion) {
    const playerCount = {};

for (let i = 0; i < participant.length; i++) {
  const player = participant[i];
  if (Object.hasOwnProperty.call(playerCount, player)) {
    playerCount[player] += 1;
  } else {
    playerCount[player] = 1;
  }
}

for (let i = 0; i < completion.length; i++) {
  const finishedPlayer = completion[i];
  playerCount[finishedPlayer] -= 1;
  if (playerCount[finishedPlayer] === 0) {
    delete playerCount[finishedPlayer];
  }
}

const answer = Object.keys(playerCount).join('');

    return answer;
}