/*
RECAP
*/
// let stringExample='string';
// let numberExample =0;
// let boolExample = true;

// let conditionExample =0;

// // if else example
// if (typeof conditionExample === 'string'){
//     console.log("yep it's a stirng");
// }else if (typeof conditionExample ==='number');{
// console.log("yep its a number")
// }else if (typeof conditionExamplec==='boolean'){
// console.log("yep its a boolean"){
// 
// }

// console.log(typeof conditionExample);
// // switch
// switch(typeof conditionExample) {
//     case 'string':
//     console.log('this is a string');
//     break;
//     case 'number':
//     console.log('this is a number');
//     break;
// default:
//     console.log('this variable is not a string or number');
//     break;
// }

// ternary below

// (typeof conditionExample === 'string') ? console.log('our variable is a string')
//  : (typeof conditionExample === 'number') ? console.log('our variable is a number')
//  : (typeof conditionExample ==='undefined') ? console.log('our var is undef')
//  : console.log('this is our default case');

let FB=15;

// if(FB % 3 === 0 && FB === 0){ // you could also just do (FB % 15 === 0)
//     console.log('Fizz Buzz');
// }else if(FB % 5 === 0){
//     console.log('Buzz');
// }else if(FB % 3 === 0)
//     console.log('Fizz');

// switch (true){
//     case(FB % 15===0):
//     console.log('Buzz');
//     break;
//     case(FB % 5 ===0):
//     console.log('Fizz');
//     break;
// }

(FB % 15 === 0) ? console.log('Fizz Buzz')
 : (FB % 5 === 0) ? console.log('Buzz')
 : (FB % 3 === 0) ? console.log ('Fizz')
 : console.log('your num is not divisible by 3 or 5');