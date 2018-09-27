// ARROW FUNCTIONS
function coffee() {
    console.log('coffee rules!')

}

let tea = () =>{
    console.log('tea is awsome!')
}
coffee();
tea()

let cat=(kitten,puppy)=>{
console.log(`I have ${kitten} cats, and ${puppy} dogs.`)
}
CacheStorage(2,3);

// Arrow fucntion Body Styles
// Concise

let apples = x => console.log(`there are ${x} apples.`)
apples(5);

// Block

let peaches = (x) => { console.log(`there ${x} peaches`)}
peaches(6);