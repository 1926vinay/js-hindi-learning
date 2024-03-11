let score="33";

// console.log(typeof score);
// console.log(typeof(score)); // also a way of typeof.

let valueInNumber=Number(score); // for conversion in number.
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

/*
if score="33a", then valueInNumber=NaN.
if score=null, then typeof=object, valueInNumber=0.
if score=undefined, then valueInNumber=NaN.
if score=true, then typeof=boolean, valueInNumber=1(for true)/0(for false).
*/

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn); //for conversion in boolean.
//console.log(booleanIsLoggedIn);

/*
if isLoggedIn = "", booleanIsLoggedIn=false.
if isLoggedIn="vinay", booleanIsLoggedIn=true.
*/

let n=33;
let abc=String(n);  //for conversion in String
// console.log(typeof abc); 
// console.log(abc);

// **************************Operations****************************************
let value=33;
let negvalue=-value;
//console.log(negvalue);

// console.log("1"+2+2); //output=122
// console.log(1+2+"2"); //output=32  // jo bhi datatype phle hga usi ke hisaab se aage wale ko bhi samjhega.

console.log(true); //output=1;
console.log(true+); //error;
console.log(+""); //output=0;

let count=100;
count++;
console.log(count); //output=101;

/*
study more about prefix and postfix from the below link.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

for type conversion below link.
https://tc39.es/ecma262/multipage/abstract-operations.html
*/
