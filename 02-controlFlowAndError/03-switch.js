let friend;

switch (friend){
    case 'Tom':
    console.log('Hey Tom,when are you rock climbing?');
    break;
case 'Kenn':
 console.log('Hey Kenn');
    break;
case 'Carolyn':
    console.log('Hey Carolyn');
    break;
default:
    console.log(`I'm sorry,${friend},but do I know you?`); //notice that "``" is used instead of " '' "
}

let dessert = 'Pie'

switch(dessert){
case 'Pie':
    console.log('Pie, pie, me oh my!')
    break;
case 'Cake':
    console.log('Cake is great!')
    break;
case 'Ice Cream':
    console.log('I Scream for ice cream!')
    break;
default:
    console.log(`Sorry, ${dessert} is not on the menu`)
}


let yep=-0;

switch(true){
case (yep <0 && yep > -10):
    console.log('worked!');
    break;
case (yep >0):
    console.log('worked here!');
    break;
default:
    console.log(`didn't`)

}