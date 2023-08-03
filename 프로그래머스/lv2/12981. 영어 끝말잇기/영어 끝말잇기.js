function solution(n, words) {
    var answer = [0,0];

    
    for (let turn = 1; turn<=words.length; turn++)
    {
        const user = turn%n === 0 ? n :turn%n;
        if (turn === 1)
            continue;
        const idx = turn-1;
        const prev_last_string = words[idx-1].substr(-1,1);
        const curr_start_string = words[idx].substr(0,1);
        if (prev_last_string !== curr_start_string)
        {
            return [user,Math.ceil(turn/n)];
        }

        const prev_words = words.slice(0,idx);
        const current_word = words[idx];
        if (prev_words.includes(current_word))
        {
            return [user,Math.ceil(turn/n)];
        }
    }

    return answer;
}