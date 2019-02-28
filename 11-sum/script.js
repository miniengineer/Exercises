function solution(array,sum) {
  var i = 0;
  var number;
  while(i < array.length) {
    number = i + 1;
    while(number < array.length) {
      if(array[i] + array[number] === sum) {
        return {fisrtPos: i, secondPosition: number};
      }
      number++;
    }
    i++;
  }
  return false;
}

solution([3,1,2,5,6],6);
