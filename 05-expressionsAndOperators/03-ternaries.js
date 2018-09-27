//Ternaries

var x = 6;

(x> 0) ? console.log("x is greater than 0.") : console.log("x is not greater than 0")

//Takes the place of this below

if (x >0){
    console.log("greater")
} else {
    console.log("lesser")
}
/// this is a new and separate example

// let x = 10;

// (x == 0) ? console.log("hello") : (x < 0) ? console.log("x is less than zero") : console.log("x is greater than 0")

let age=20;

(age >=25)? console.log('You can rent a car!') 
: (age >=21)? console.log('You can drink!') 
: (age >=18)? console.log('You can vote!') 
: console.log('You are to young!') 

let yep=-8;

(yep <0 && yep >10)? console.log("yep is between 0 and -10") 
: (yep >0) ?console.log("yep is greater than 10") 
: console.log("yep is greater than 0");

