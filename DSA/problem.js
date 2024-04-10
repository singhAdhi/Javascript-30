// palindrome
let a = 121;

function palindrome(x) {
  console.log(x === +x.toString().split("").reverse().join(""));
}
//526,"526",["5","2","6"],["6,"2","5"],"625"
palindrome(a);
