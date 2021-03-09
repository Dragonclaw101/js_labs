'use strict';

let num = 73;
let drink = 'water';
let named = 'Peter';


function hardCode(){
console.log('The number I am thinking of is ' + num);
console.log('I like to drink ' + drink);
console.log('My name is ' + named);
}

function input (number, drinks, names){
    num = number;
    drink = drinks;
    named = names;


    console.log('The number you picked is ' + num);
    console.log('You like to drink ' + drink);
    console.log('Your name is ' + named);
}

hardCode();

input(13, 'lemonade', 'Mary');