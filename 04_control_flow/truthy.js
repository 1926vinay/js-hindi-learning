
/*const username="1926kumarvinay@gmail.com";
if(username){ //we are not comparing anything //it is the case of truthy/falsy values.
    console.log("email found");
}
else{
    console.log("not found");
}
*/

/*
//fasly values
false, 0, -0, BigInt, 0n, "", null, undefined, NaN(not a number)

//truthy values
"0", 'false', " ", [], {}, function(){}
*/

/*
//for array
const arr=[];
if(arr.length===0){
    console.log("Array is empty");
}

//for object  //if you are using "Object.keys(objname)", then all the keys will come in an array form.
const obj={};
if(Object.keys(obj).length===0){   //after converting all the keys of objects into an array, simply usin arr.length.
    console.log("object is empty");
}
*/

/*
//Nullish Coalescing Operator (??)  //especially for null and undefined

// let val1=5 ?? 10; //output-> 5
// let val1=null ?? 10;  //output-> 10
// let val1=undefined ?? 10;  //output-> 10
// let val1=null ?? 10 ?? 5  //output-> 10
// console.log(val1);
*/

/*
//Terniary Operator

//condition ? true : false

let price=100;
price >= 80 ? console.log("price is greater than 80") : console.log("price is less than 80");
*/