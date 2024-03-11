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
console.log(typeof abc); 
console.log(abc);