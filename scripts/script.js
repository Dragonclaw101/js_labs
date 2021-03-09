'use strict';

function add(a,b,c,d){
console.log('The numbers that will be added are ' + a + ' ' + b + ' ' + c + ' ' + d);
let num = a + b + c + d;
return num;
}

function subtract(e,f){
    console.log('The numbers to be subtracted are ' + e + ' ' + f);
    let sub = e - f;

    return sub;
}

function multiply(g,h,i){
    console.log('The numbers to multiply are ' + g + ' ' + h + ' ' + i);
    let mult = g * h * i;

    return mult;
}

function divide(j,k){
    console.log('The numbers to be divided by are ' + j + ' ' + k);
    let div = j / k;

    return div;
}


function logged(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11){
    console.log(add(n1,n2,n3,n4));
    console.log(subtract(n5,n6));
    console.log(multiply(n7,n8,n9));
    console.log(divide(n10,n11));
}


let num1 = 3;
let num2 = 9;
let num3 = 4;
let num4 = 17;
let num5 = 2;
let num6 = 5;
let num7 = 8;
let num8 = 13;
let num9 = 18;
let num10 = 11;
let num11 = 19;

logged(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11);