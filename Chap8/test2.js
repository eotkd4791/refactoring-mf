let scores = [87,	57,	98,	61,	5,	27,	25,	19,	26,	57,	83,	72,	41,	65,	67,	74,	100,	40,	85,	16]

// 이 위로 수정 불가

function getStatsOfScores() {
  return { sum: scores.reduce((sum, score) => sum + score, 0) };
}

/**
 * 쓰인 리팩토링 기법
 * 
 * 반복문 쪼개기
 * 반복문 파이프라인
 * 죽은 코드 제거하기
 */

// 이 아래로 수정 불가

let stat = getStatsOfScores();
console.log("sum of scores : " + stat.sum)