function dayOfWeek(startDay, days) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var deduplicatedDays = startDay,
    resultDay = "";

  deduplicatedDays = (deduplicatedDays + days) % 7;
  resultDay = week[deduplicatedDays];

  return resultDay;
}

function solution(a, b) {
  var answer = "001";
  const month = parseInt(a),
    day = parseInt(b);
  var currentDayPointer = 5;
  var days = 0;

  const lastDay = {
    31: [1, 3, 5, 7, 8, 10, 12],
    30: [4, 6, 9, 11],
    29: [2]
  };

  // 월
  for (var index = 1; index < month; index++) {
    if (index < month) {
      Object.keys(lastDay).forEach(element => {
        element = parseInt(element);
        if (lastDay[element].includes(index)) {
          days = days + parseInt(element);
        }
      });
    }
  }

  //일
  days = days + (day - 1);

  answer = dayOfWeek(5, days);

  return answer;
}