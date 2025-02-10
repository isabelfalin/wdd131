// example 1
// const steps = ["one", "two", "three"];
// function listTemplate(step) {
//   return `<li>${step}</li>`//the html string made from step
// }
// const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
// // document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

// // Example 2
// const grades = ["A", "B", "A"]
// function gradeToNumber(grade){
//   let points = 0;
//   if (grade === "A"){
//     points = 4;
//   } else if (grade === "B"){
//     points = 3;
//   }
//   return points;
// }
// const gpaPoints = grades.map(gradeToNumber);



// // Example 3
// const initialValue = 0;
// const sumWithInitial = gpaPoints.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

// Example 4
// const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

// const result = fruits.filter(function (fruit){
//   return fruit.length > 6;
// });


// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// Example 5
const myArray = [12, 34, 21, 54];
luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

// console.log(myArray.indexOf('34'));
// // Expected output: 1

// // Start from index 2
// console.log(myArray.indexOf('34', 2));
// // Expected output: 4

// console.log(myArray.indexOf('21'));
// // Expected output: -1