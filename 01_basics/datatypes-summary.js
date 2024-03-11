/*
Primitive data types:
String, Number, Boolean, null(ek dm khaali), 

undefined(variable is declared but not initialized and memory is also declared. ex-> let state),

symbol(it will make value unique. ex-> const id=Symbol('123'); const id2=Symbol('123'); 
Although if you assign equal values to two or more variables, it will still make the values different from each other.), 

BigInt(used for sceintific values or very much bigger values).
ex-> const bigNumber=11235638254327572946n; no matter how big the number is, just add 'n' at the last of the value.
by doing so, it will automatically convert it into BigInt.
*/

/*
Refernces (Non-Primitive data types):
Arrays, Objects, Functions.

Arrays:
const arr=["vinay", "kumar", "age"];

Objects:
let dog:{
    breed:"Rotweiler",
    height:"4ft",
}

Functions:
const myFunction=function(){
    console.log("Hello world");
}
*/

/*
Is javascript is dynamic or static?
JavaScript is a dynamically typed language. This means that the type of a variable is not declared
when the variable is created, but is instead determined by the value that is assigned to the variable. 
For example, the following code is valid JavaScript:

let x = 5; // x is a number
x = "hello"; // x is now a string
*/