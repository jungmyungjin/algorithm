function solution(lottos, win_nums) {
    var answer = [];
    
    let check_count = 0;
    let mystery = 0;
    // 현재 번호 기준 맞는지 확인
    lottos.forEach((num)=>{
        if (num === 0)
            mystery++;
        else if( win_nums.includes(num) )
            check_count++;
    }
  )
    
    let maximun_lank = 6 - check_count - mystery +1;
    let lowest_lank = 6 - check_count + 1;
    maximun_lank = maximun_lank < 1 ? 1 : maximun_lank;
    maximun_lank = 6 < maximun_lank ? 6 : maximun_lank;
    lowest_lank = 6 < lowest_lank ? 6 : lowest_lank;
    
    return [maximun_lank,lowest_lank];
}