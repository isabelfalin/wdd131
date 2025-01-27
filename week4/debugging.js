
const PI = 3.14;
let x = 0;

function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}

x = circleArea(3);
console.log(x);
x = circleArea(22);
console.log(x);