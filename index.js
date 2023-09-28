// Code your solutions in this file

let spy;

const names = ["Guadalupe", "Ollie", "Aki"];
let count = 0;
function writeCards(){
    let thankMessage = [];
    for(count ; count < names.length ; count++){
        thankMessage.push(`Thank you, ${names[count]}, for the wonderful surprise gift!`);
    }
    return thankMessage;
}


function countDown(){
    let number = 10;
    while (number >= 0){
        console.log(number);
        number--;
    }
}