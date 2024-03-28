/*
const user={
    name:"Vinay",
    email:"1926kumarvinay@gmailcom",
    welcomeMessage:function(){
         console.log(`${this.name}, welcome to website`);
         console.log(this)
    }
}
console.log(this);  //output-> {}  //bcz we are in node environment, if you do this in browser in inspect element then the result will be different.  
//because earlier, there was only one way to execute javascript which is in browser becuase the engine which execute javascript was only present in browser.
//now we have separated that engine, and now we have standalone engines named node, deno, bun, etc.,. that is why when we execute javascript in browser, then the global object "window-object" will be executed.
//but if you execute in node environment then it will just print-> {}, "empty-object".
// user.welcomeMessage();
// user.name="Sam";
// user.welcomeMessage();
*/

//Normal function
// function chai(){
//     let username="Vinay";
//     console.log(this.username);//output-> undefined  //unable to use this keyword inside function...//will talk in later videos.
// }
//chai();


//Anonymous function(own)
// const chai=function(){
//     let username="Vinay";
//     console.log(this.username);//output-> undefined
// }
//chai();


//Arrow function  //way of using arrow function-> "() => {}"
// const chai=()=>{
//     let username="Vinay";
//     console.log(this.username);//output-> undefined
// }
//chai();

//use of normal arrow function  //if u r using curly braces then u hv to use return stmnt.
// const addTwo=(num1,num2)=>{  //passing parameters
//     return num1+num2;
// }
// console.log(addTwo(3,7));

//u can also use arrow function like below
// const addTwo=(num1,num2)=> num1+num2
// console.log(addTwo(3,4));

//u can also use arrow function like below
// const addTwo=(num1,num2)=> (num1+num2)
// console.log(addTwo(3,4));

//returning object by the use of above function type;
const addTwo=(num1,num2)=> ({username:"Vinay"})
console.log(addTwo(3,4));  //output-> { username: 'Vinay' }


