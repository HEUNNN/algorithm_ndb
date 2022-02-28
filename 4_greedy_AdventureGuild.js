"use strict";
//greedy algorithm
/* 모험가 길드
한 마을에 모험가가 N명 있습니다. 모험가 길드에서는 N명의 모험가를 대상으로 ‘공포도'를 측정하였는데, ‘공포도'가 높은 모험가는 쉽게 공포를 느껴 위험 상황에서 제대로 대처할 능력이 떨어집니다.

모헌가 길드장은 그룹을 안전하게 구성하고자 공포도가 X인 모험가는 반드시 X명 이상으로 구성한 모험가 그룹게 참여해야 여행을 떠날 수 있도록 규정했습니다. 

최대 몇 개의 모험가 그룹을 만들 수 있는지를 출력하는 프로그램을 작성하세요.

- 예를 들어 N = 5 이고, 공포도 = [2, 3, 1, 2, 2] 일 때,  그룹1에 공포도가 1, 2, 3인 모험가를 한 명씩 넣고, 그룹2에 공포도가 2인 남은 두명을 넣게 되면 총 2개의 그룹을 생성할 수 있다.
- 몇 명의 모험가는 마을에 그대로 남아 있어도 된다.
*/
function solution(n, arr) {
  let answer = 0;
  let tmp = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    tmp.push(arr[i]);
    if (tmp.length >= i) {
      answer++;
      tmp = [];
    }
  }
  return answer;
}
console.log(solution(5, [2, 3, 1, 2, 2]));