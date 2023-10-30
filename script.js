// Print 1 - 135
//start from 1 , ends at 135
//call it
for (let i = 1; i <= 135; i = i + 1) {
  //console.log(i);
}

//Print Odd Numbers 1 - 135
//start from 1, ends at 135
//need loop
// condition to skip one number in loop
//call it
for (let i = 1; i <= 135; i = i + 2) {
  //console.log(i);
}

//Sum of Printed Numbers
//start from 1 , ends at 135
//sum the previous sum + new element
//call it
let sum = 0;
for (let index = 0; index <= 135; index++) {
  sum = index + sum;
  // const string = "numberis: " + index + ", sum: " + sum;
  const string = `numberis ${index} sum ${sum}`;
  //console.log(string);
}

//Print the elements of an array
//have an array
//go through every element to print
//for(intiallization; condition; increment/decrement)
//intiallization - let i=value;
//condition - i < value
//increment - i++

let x = [1, 4, 2, 12];
for (let index = 0; index < x.length; index++) {
  //console.log(x[index]);
  /*  console.log(x[0]);
  console.log(x[1]);
  console.log(x[2]);
  console.log(x[3]); */
}

//find the maximum value of the array
//have an array
//go through every element to find max, using loop.
// // Update max if a larger value is found in the loop.

let m = [1, 4, 0, -1, -2];
let max = m[0];
for (let index = 0; index < m.length; index++) {
  if (m[index] > max) {
    max = m[index];
  }
}
//console.log("The maximum value in the array is: " + max);

//verage value of all elements in the array
// have an array
//sum of array divided by total numbers in array (array.length)
//return : print average

let X = [2, 1, 3];
let addition = 0;
//let a = sum[index] / X.length;
for (let index = 0; index < X.length; index++) {
  addition = X[index] + addition;
  //console.log(addition);
}
let c = X.length;
//console.log(c);
let average = addition / c;
//console.log(average);

//remove all negative numbers and replace them with a 0
// loop ; if number < 0 replace by 0
let G = [2, -1, 4, -3];
for (let index = 0; index < G.length; index++) {
  if (G[index] < 0) {
    G[index] = 0;
  }
}
//console.log(G);

//Number to String
//turns the negative values to strings
//need an array
//loop

let Y = [1, -4, 0, -1];
for (let index = 0; index < Y.length; index++) {
  if (Y[index] < 0) {
    Y[index] = "turning";
  }
}
console.log(Y);
