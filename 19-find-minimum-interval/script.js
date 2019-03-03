
function minInterval(array) {
  array.sort();
  var minInterval = Infinity;
  for(var i = 0; i < array.length; i++) {
    if(array[i+1] - array[i] < minInterval) {
      minInterval = array[i+1] - array[i];
    }
  }
  return minInterval;
}

minInterval([0,30,120,125,345,500]);
