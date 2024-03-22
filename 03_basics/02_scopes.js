//scopes={}
/*
var c=300;
if(true){
    let a=10;
    const b=20;
    var c=30;
}
var c=400;
// console.log(a);  //it will give that the value is not defined.
// console.log(b);  //it will give that the value is not defined.
console.log(c);  //output-> 400  //it gives the last declared value in var which is the problem with var.
*/ 

/*
//let in terms of scope
if it declared outside the scope no matter before th escope or after the scope it will give the value which is declared outside the scope.

//const in terms of scope
same as let but you can't decalre the const value twice in the code.

//var in terms of scope
it will give the last declared value wherever in the code.
*/

/*
//better understanding of scope //child function can access variables of parent function, but parent function can't access variables of child function.
function one(){
    const username="Vinay";
    function two(){
        const website="youtube";
        console.log(username);
    }
    //console.log(website);  //output-> error ,bcz u can't access website from outside the scope{};
    two();
}
one(); //output-> Vinay   //u have to call the function does not matter if u have used console stmt inside the function. 
*/

/*
//same applies with if statement
if(true){
    const username="Vinay";
    if(username=="Vinay"){
        const website=" Youtube";
        console.log(username+website);
    }
}
//output-> Vinay Youtube
*/

/*
//ways of defining function  //just for determining the error

console.log(addone(5)); //output-> 6
function addone(num){
    return num+1;
}
//console.log(addone(5)); //output->6
//for this type of function output-> 6, either u have used console stmt before or after the function

//console.log(addtwo(6)); //error //bcz "addtwo" is not decared
const addtwo=function(num){
    return num+2;
}
console.log(addtwo(6)); //output-> 8
//for this type of function in which you are storing function in a variable will give you output if you are using console stmt after function but if you r using console stmt before the function and using the varible to print, will give u error bcz it will tell the varible is not declared. 
*/