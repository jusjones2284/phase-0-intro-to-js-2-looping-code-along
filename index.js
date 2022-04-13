// Code your solutions in this file


// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
    
// }

// for(let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
// }

const gifts = ["teddy bear", "drone", "doll"];


// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         
//     }

//     return gifts;
// }

// wrapGifts(gifts);
// wrapGifts(weddingGifts);


// function wrapGifts(gifts){
//     for(let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts)



// const people = []
// const party = 'surprise'




const arrayNames = ["Thomas", "Grant", "Andrew", "John"];

let newArray = [];

function writeCards(names, event){
    
    for(let i = 0; i < names.length; i++){

        newArray[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return newArray
}

writeCards();

function countDown(){
    let countDown = 10;
    while (countDown >= 0){
        console.log(countDown --)
    }
};


// let myArray = ['a','b','c','d','e','f','g'];

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

// let myArrays = ['z','x','y','p'];

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }


// let j = 0;

// while(j < myArray.length){
//     console.log(myArray[j++]);
// }

// let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

// let myArray = ['a', 'b', 'c', 'd', 'e'];

// let j = 0

// while(j < myArray.lenght){
//     console.log(myArray[j++]);
// }

// for(const char of 'Hello, world!'){
//     console.log(char);
// };

const address ={
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY', 
    zipCode: '1004',
};

for (const key in address){
    console.log(key);
}