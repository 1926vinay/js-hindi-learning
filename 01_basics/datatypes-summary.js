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
Refernces (Non-Primitive data types): the datatypes of all non-primitive, is said to be function and the return type of function is said to be object function.
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

/*
the typeof operator link (for interview purpose): 13.5.3 The typeof Operator
https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-typeof-operator

*/

/*********************************************************************************************/
//Stack (Primitive data types). Goes in the stack (and get copied value) 
let myYouTubename="vinay@gmail.com";

let anothername=myYouTubename; //it will give the copied value of myYouTubename not the original value.
anothername="kumar@gmail.com"; //you are changing in the copied value that you got from myYouTubename, that's why the original value of myYouTubename remains unchanged.

console.log(myYouTubename);  //output->vinay@gmail.com
console.log(anothername);    //output->kumar@gmail.com

//Heap (Non-primitive data types). Goes in the Heap (and get the reference of the original value not of the copied value)
let user1={
    email:"vinay@gmail.com",
    upi:"123@ybl"
}

let user2=user1; //it will give the 'reference of the original value' of user1 directly from heap.
user2.email="kumar@gmail.com";// you are changing the original value not the copied value.

console.log(user1.email);  //output->kumar@gmail.com
console.log(user2.email);  //output->kumar@gmail.com