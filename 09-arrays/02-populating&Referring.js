/*
INTRO TO ARRAYS

have [] brackets
can hold multiple datatypes
great for listing
*/

// overflow/calling

let students=['tony','marshall','rhys','ray',23,true,['ryan','iesha']];


console.log(typeof students); //object
console.log(students[2]); //rhys

console.log(`Hello ${students[6][1]}, you look nice today`);
console.log("Hello" +students[6][1] +", you look nice today");

let food = ['Pecan pie','Shrimp','Quesadilla','Cheese Cake','Hotdog'];

// for(let i =0; i < food.length; i++){
//     console.log(food[i])
// }

for (let f of food){
    console.log(f)
}
food.push('Pizza') //appends to the end of the array
console.log(food);
food.splice(1,1,"bananas") //first number:the index to start at, the second number: number of things to remove, third number: replacement value.
console.log(food);
food.splice(2,0,'Sweet Potato Pie')
console.log(food);
food.pop(); //removes the last value