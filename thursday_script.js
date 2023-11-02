function isPalindrome(str) {
  const arrString = str
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("");
  let newString = [];
  for (let index = arrString.length - 1; index >= 0; index--) {
    newString.push(arrString[index]);
  }
  let reverseString = newString.join("");
  if (str == reverseString) {
    return true;
  } else {
    return false;
  }
}

const result = isPalindrome("madam");
console.log(result);
