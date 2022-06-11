"use strict";
function solveEquation(a, b, c) {
  let arr = [];
let D = b**2-4*a*c
console.log('D = ' + D);

if (D < 0) {
    console.log('Корней нет');
    arr = [];
} else if (D === 0) {
    arr[0] = -b/(2*a);
    console.log('Имеется один корень D = ' + arr[0]);
} else {
    arr[0] = (-b + Math.sqrt(D))/(2*a);
    arr[1] = (-b - Math.sqrt(D))/(2*a);
    console.log('Имеется два корня D = ' + arr);
}
return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
