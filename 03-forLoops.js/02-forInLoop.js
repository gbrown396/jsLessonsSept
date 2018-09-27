/*
FOR IN LOOPS

Great for iterating over values in an object
*/

let student ={ name:'Christian', awesome: true, degree: 'JavaScript',week:1 }

for (let item in student){
    console.log(typeof item);
    console.log(student[item])
}


let catArray=['tabby','british shorthair','brumser','maine coon'];

for (cat in catArray){
    console.log(catArray[cat]);
}

//-------------------------------------challenge------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let studentDirectory =['mark','lisa','bob','dan','mary'];

for (student in studentDirectory){
    console.log(studentDirectory.charAt(0).toUpperCase() + this.slice(1)[student]);
}

//-------------------------------------example------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let studentName='paul';
let capName='';

for(let ch in studentName){
    if (ch == 0){
        capName = studentName[ch].toUpperCase();
    }else{
        capName = capName + studentName[ch].toLowerCase();
    }
    console.log(capName)
}
console.log(capName);