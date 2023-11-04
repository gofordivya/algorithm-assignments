// Having an array of numbers
// use loop
// Swap the elements

function thirdhighestnum(input) {
  // Bubble Sort with a for loop
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - i - 1; j++) {
      if (input[j] < input[j + 1]) {
        // Swap the elements
        const temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  console.log(input[2]);
}

const inputValue = [-2, 0, 2, 3, 5, 7, 8, 9, 11, 20, 31];

thirdhighestnum(inputValue);
