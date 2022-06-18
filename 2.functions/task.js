// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  for (let  i = 0; i < arr.length; i++) {
sum = sum + arr[i];
  if (arr[i] < min) {
    min = arr[i];
   };
   if (arr[i] > max) {
    max = arr[i];
   };
  };
  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
 
  let sum = 0;
  for (let  i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
   };
    return sum;
  }

function makeWork(arrOfArr, func) {

  let max = 0;
  let elementMax = 0;
for (let j = 0; j < arrOfArr.length; j++) {
  elementMax = func(arrOfArr[j]);
  if (elementMax > max) {
    max = elementMax
  }
}
  return max;
};




// Задание 3
function worker2(arr) {
  let min, max, diff;
  min = arr[0];
  max = arr[0];
  sum = 0;
  for (let  i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
   };
   if (arr[i] > max) {
    max = arr[i];
   };
  };
  diff = max - min;
  Math.abs(diff);
  return diff;
}
