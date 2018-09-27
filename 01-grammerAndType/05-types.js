/*
TYPES
*/

// Booleans
let on =true;
console.log(on); //output ->true

let off =false;
console.log(off); //output ->false

// boolean can represent; true/false, on/off, yes/no

// null
/*
Null = empty value(not 0; not undefined)

It is like an empty container; nothing is in it; but it still exist  as a space to fill
*/

let empty = null;
console.log(empty);

// Undefined
/*
undefined = no value assigned (not even an empty container)

undefined is not an error
*/

let undef= undefined;
console.log(undef);

let grass;
console.log(grass);

/* think of undefined and null as packages at UPS

null -> package deliberatley sento out from UPS as empty

undefined -> package that was forgotten, or a package that has not yet been used
*/

// Numebers
let degress = 65;
console.log(degress);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notquite = 0.2 + 0.1;
console.log(notquite);

let anothernumber = 0.2 + 0.1;
console.log(anothernumber)

let num = 0.3;
console.log(num);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard);


// Strings
// strings = any value within quotes; 25 split out the value within the quotes

let stringOne ="double quotes";
let stringTwo ='single quotes';
console.log(stringOne+stringTwo);

// numbers vs. strings

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); // number
console.log(second); // string

console.log(typeof first); // number
console.log(typeof second); // string

// What's going on here?
// + -> addiyion when given 2 numbers, concatention when given 2 strings

let third = 1050 + '100';

console.log(third);

// Challenge

let firstName = 'George';
let lastName =' Brown';
let address =' 11047 Eaton Court'
let city =' Fishers'
let state=' IN'
let zipCode=" 46038"
console.log(firstName+lastName+address+city+state+zipCode)
console.log(firstName)
console.log(lastName)
console.log(address)
console.log(city)
console.log(state)
console.log(zipCode)

// Objects
/*

What is an Object?

A container that can hold multiple datatypes


denoted by "{}"
has keys and vaules (color (key): 'blue' (value)), separated with a colon
Each key seperated with a comma


*/
let burritosNOW = {
    size: 'large',
    quanity: 4,
    now: true
}

console.log(burritosNOW);
console.log(typeof burritosNOW);

// Arrays
/*
Arrays are great for lists

denoted by the "[]"
Arrays have values seperated by commas -> ['blue','green','yellow']

*/

let burritos =['large',4,true]
console.log(burritos);
console.log(typeof burritos);