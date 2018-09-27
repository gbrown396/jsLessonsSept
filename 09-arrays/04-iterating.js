// Iterating
let food = ['Pecan pie','Shrimp','Quesadilla','Cheese Cake','Hotdog'];

// food.forEach(f=>{console.log(f)});
food.forEach((food,number) => {
    console.log(food);
    console.log(number);
})

let movie = ['Shrek','Shrek 2','Shrek: The Third', "Shrek:Forever After",'Shrekmas: A Christmas Special']

movie.forEach((movie,) => {
    console.log(movie);
})
movie.push('Shrek 5');
movie.splice(1, 1,'Shrek: The Musical');
console.log(movie)

let long =[1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let newArray = new Array(73)
console.log(newArray.length);
newArray.forEach(el =>{
    console.log(el);
})
console.log(newArray);