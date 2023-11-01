//Addition
//loop for all the values between 200 and 2700 (inclusively)

// assignment 1

function assignment1() {
  let sum = 0;
  for (let i = 200; i <= 2700; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      sum = sum + i;
    }
  }
  console.log(sum);
}

//give an array
//for loop in reverse
//creat empty array and push the resultant
// assignment 2
function assignment2() {
  let value = [2, 1, 6, 4, -7];
  let result = [];
  for (let i = value.length - 1; i >= 0; i--) {
    result.push(value[i]);
  }
  console.log(result);
}

// creat empty array
// condition : %3 & %5 then frizzBuzz ; only %3 fizz ; only %5 buzz ; else push others
// assignment 3

function assignment3() {
  let result = [];
  for (let i = 1; i < 135; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  console.log(result);
}

//Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
//specifinf limit
//while loop
function assignment4() {
  let a = 0;
  let b = 1;
  let total = 0;

  while (a < 1000000) {
    if (a % 2 === 0) {
      // Check if the number is even
      total += a;
    }
    const temp = a;
    a = b;
    b = temp + b; // Generate the next Fibonacci number
  }

  console.log(total);
}

// creat empty array
//push positive value alone.

function assignment5() {
  let result = [];
  let X = [1, -2, 4, 1];
  for (let index = 0; index < X.length; index++) {
    if (X[index] > 0) {
      result.push(index);
    }
  }
  console.log(result);
}
//declare variable to be replace
//for loop
//repeat * to the the length of word
function assignment6() {
  let x = ["Man", "I", "Love", "The", "Matrix", "Program"];
  let wordToReplace = "Program";
  for (let index = 0; index < x.length; index++) {
    if (x[index] === wordToReplace) {
      x[index] = "*".repeat(wordToReplace.length);
    }
  }
  console.log(x);
}

//assignment1();
//assignment2();
//assignment3();
//assignment4();
//assignment5();
//assignment6();
