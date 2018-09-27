/* 
COMPARISON OPERATORS 
*/

// equality doesnt care about type
console.log('3'== 3); // this is true (type coercion)
console.log('three'== 3); // false
console.log(0 == false == '' == null); //examples of falsey

// strict equality used to check if things are the same checks both value and type
console.log(3 === 3); //true
console.log(3 === '3'); //false

// not equal doesnt care about type
console.log('4' !=4); //false
console.log('3' !=4); //true

// strick not equal cares about type
console.log('3'!== 3); //chacks type and value

// greater than
console.log(3 > 2); //true

// less than
console.log(2 < 3); //true

// greater or equal to
console.log( 3 >= 3 ); //true

// less than or equal to 
console.log( 3 <= 3) ; //true

// And: returns true if the left and right are both true
console.log(true && true); //output:true

let x=5;
console.log(x < 10 && x >- 5); //true
console.log(x < 10 && x > 15); //false

// tangent
let str ='a';
console.log(str <'p');

// Or: return true if the left or right are true
console.log(true || false);// true

let x = 5;
console.log(x < 10 || x > 15); //true

// if(variable =true)
// if(variable =false)