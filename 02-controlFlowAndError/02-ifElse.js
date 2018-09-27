/* 
IF ELSE
*/

weather = 75;

 if (weather <70){
     console.log ('Wear a jacket');
 } else {
     console.log ('No jacket necessary');
 }

 name = 'george';

 if(name = 'george'){
     console.log('Hello! My name is George');
 } else {
    console.log('Hello,what is your name')
 }

 name('george')
 function name(string){
    return string.charAt(0).toUpperCase()+string.slice(1)+toLowerCase();
 }
 console.log(name('jOSh'));

 let name ='geORGE';
 if(name[0]== name[0].toUpperCase()){
     firstLetter = name[0]+name.slice(1).toLowerCase();
     console.log(firstLetter);
 }else{
     otherLetters = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
     console.log(otherLetters);
 }



age = 30;

 if (age <17){
     console.log ("Sorry, you're to young to do anything");
 } else if(age =18 ){
     console.log ('Yay! you can vote!');
 
}else if(age >=21){
    console.log ('Yay! you can drink!');

}else (age >=25);
    console.log ('Yay! you can rent a car');

/* Instructer code

var age = 30;

if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 18) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}

*/











//  if(this thing is true){
//      code code code
//  }else if(this other thing is true){
//      run some other code
//  }else if(third thing is true){
//      run this code block
//  }else{
//      run the stuff inside here!
//  }