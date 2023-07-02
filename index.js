
function isPalindrome(string) {
  // Convert the string to lowercase
  string = string.toLowerCase();

  // Reverse the string
  let reversedString = string.split('').reverse().join('');

  // Compare the original and reversed strings
  if (string === reversedString) {
      return true;
  } else {
      return false;
  }
}

console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("racecar"));  // Output: true




