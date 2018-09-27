/*
variables

notes on variables
1)a variable must begin a letter,underscore, or dollar sign
2)you can use numbers,but they must follow one of the above
3)JavaScript is case sensitive-'hello' and 'Hello' are diffrent
*/
var a = 1;
var b = 2;
console.log[a+b]; //3


/*
DECLARATIONS 

Declrations are the LEFT SIDE of a variable 
    It is simply the var x
    It is on the left side of the assignment operator (x)

Initilizations are the RIGHT SIDE of the variable
    Set the value fo the variable
    Includes the variable name (x),the addingment operator (x) anf the value (10) => x = 10
*/
var x;
console.log('Declaration',x)

x = 10;
console.log('Initilizations 1;',x);

x= 33;
console.log('Initilizations 2;',x);

/*
Var,Let, and Const:
var = 'old' js keyword for variables
let = 'new' keyword for variables (intorduced in ES6)
const= also 'new'; declares unchangable variables
*/

let today ='Great';
const elevenfifty='Wonderful';
console.log(today,elevenfifty)

today = "lovely";
console.log(today,elevenfifty)

// elevenfifty='super'
console.log(today,elevenfifty)