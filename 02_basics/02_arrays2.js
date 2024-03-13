const arr1=["Thor","Ironman","spiderman"];
const arr2=["batman","flash","superman"];
arr1.push(arr2);
//console.log(arr1); //[ 'Thor', 'Ironman', 'spiderman', [ 'batman', 'flash', 'superman' ] ]  length of arr1=4; (4th element is the arr2).

//concat and spread will work more efficiently in inspect element.
//use concat to merge two or more arrays.for that u need to have a another variable.
const all_heros=arr1.concat(arr2); 
//console.log(all_heros);  //["Thor","Ironman","spiderman","batman","flash","superman"];

//spread way to merge(best way)  
const all_new_heros=[...arr1,...arr2];
//console.log(all_new_heros); //["Thor","Ironman","spiderman","batman","flash","superman"];

// console.log(Array.isArray("Vinay"));  //false  //it will check whether it is present or not
// console.log(Array.from("Vinay")); //['V','i','n','a','y']  //it wwill put the given value and make it into array elements.

//Array.of(n1,n2,n3,...);
let n1=100;
let n2=200;
let n3=300;
console.log(Array.of(n1,n2,n3)); //output-> [100,200,300]