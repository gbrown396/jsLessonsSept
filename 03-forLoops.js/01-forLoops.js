/*
CLASSIC FOR LOOPS
*/

// Loop Variations
// For statement
// Do while statement
// While Statement
// Labled statement
// Break statement
// continue statement
// for in statement
// for of statement

for (let i = 0 ;i < 10 ;i ++){ // counted from 0-9 by 1's
    console.log(i);
}

// sount form 0-20,by 2s
for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

for (let i = 10 ; i >= 0 ;i --){ // counted from 10-0 by 1's
    console.log(i);
}

// went through a name and displayed each letter individually
let name = "george";
// g = 0, e = 1, o = 2, r = 3, g = 4, e = 6,
for(let i = 0; i < name.length;i++){
    console.log(name[i]);
}
let sum = 0;
for (let i = 1; i <= 50; i++) {
   sum = sum + i;
}
console.log(sum);