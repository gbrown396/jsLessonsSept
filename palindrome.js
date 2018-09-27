var str= prompt('ENTER A PALINDROME')
let str2 = "";
function palindrome(str){
  str2 = str.split('').reverse().join('').toLowerCase();}

palindrome(str);

if (str==str2){alert(`Yes ${str} is a palindrome`);
  }else{ alert(`No ${str} is not a palindorme.Try Again?`);
}
console.log(str);
console.log(str2);