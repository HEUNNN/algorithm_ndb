"use strict";
//greedy algorithm
//거스름 돈
/*
카운터에는 거스름돈으로 사용할 500원, 100원, 50원, 10원짜리 동전이 무한히 존재한다고 가정합니다.
손님에게 거슬러 주어야 할 돈이 N원일 때 거슬러 주어야 할 동전의 최소 개수를 구하세요.
(단, 거슬러 줘야 할 돈 N은 항상 10의 배수입니다.)

N = 1,260
*/
function solution(n) {
  let answer = 0;
  let coin = [500, 400, 100];
  for (let x of coin) {
    answer += parseInt(n / x);
    n %= x;
  }
  return answer;
}
console.log(solution(800));
