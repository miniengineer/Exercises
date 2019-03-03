/**
 * Get pair of numbers that gives you a target sum,
 */
function solution(array,sum) {
  var number;
  for(var i = 0; i < array.length; i++) {
    for(number = i + 1; number < array.length; number++) {
      if(array[i] + array[number] === sum) {
        return {firstPos: i, secondPos: number};
      }
    }
  }
  return false;
}

solution([3,1,2,5,6],6);
