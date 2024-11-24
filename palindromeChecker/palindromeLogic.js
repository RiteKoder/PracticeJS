const input1 = document.getElementById("input");
const btn = document.getElementById("btn");

function checkPalindrome() {
  let input2 = input1.value;
  reverse = input2.split("").reverse().join("");

  if (input2 === reverse) {
    alert("Palindrome");
  } else alert("Not a Palindrome");
}

btn.addEventListener("click", checkPalindrome);
