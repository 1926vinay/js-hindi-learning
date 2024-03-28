// Immediate Invoked Function Expressions (IIFE)

//syntax=()()

/*
what is iffe?
1.) the function which is immediately invoked.
2.) global scope ke pollution se problem hti h kai baar to uss global scope ke variables hai ya jo bhi waha declaration h to uske pollution ko hataane ke liye hmne "iife" ka use ka use kiya h. 
*/

// (function chai(){
//     console.log("DB CONNECTED");
// })()
//for arrow function-> ( ()=>{} ) ()

//if you are using anothe iife then in the first iife you have to use ";" for breaking. like below
(function chai(){ //named iife. the name of the iife is chai.
    console.log("DB CONNECTED");
})();//termination, for the 2nd use of iife.

((name)=>{  //not a named iife
    console.log(name);
})("Vinay");

/*
how does javascript works behind the scene 5:55:33  to  6:21:45
*/