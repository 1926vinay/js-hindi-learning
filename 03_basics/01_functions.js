/*
//also a way (own internshala)
function get_max(a,b){
    return a+b;  //after return statement, if u r adding console.log then it will not printed (as it will tell it is unreachable), but if u r adding before return statement then it will be printed.
    //return `${a+b},is the returned value`  //use of back-tick to print extra words also.(Own)
}
let result=get_max(5,6);
console.log(result); //output-> 11
*/

/*
//also a way (chai aur code)
function addTwoNumbers(number1,number2){ 
    console.log(number1+number2);
}
addTwoNumbers(5,6); //output-> 11
*/

/*
//difference between parameters and arguements

//when you are defining the function and passing the values, then they are called parameters.
function addTwoNumbers(number1,number2){  //parameters

}
//when you are calling the function and passing the values then they are called arguements.
addTwoNumbers(5,6); //arguements
*/

/*
function loginUserName(userName="Sam"){  //setting up default value. if the aguement is not passed, then it will print-> Sam, just logged in.
    if(userName===undefined){
        console.log("please enter a username");
        return;
    }
    return `${userName},just logged in`;
}
console.log(loginUserName("vinay"));  //if u don't pass any arguement, then it will give you "undefined".
*/

/*
//rest operator,by using rest operator(...), you can pass as much value you want, at the end it will store them in an array.
function calculateCartPrice(...num1){  
    return num1;
}
console.log(calculateCartPrice(200,300,400,500,600));  //output-> [200,300,400,500,600] //in an array

function calculateCartPrice(val1,val2,...num1){  
    return num1;
}
console.log(calculateCartPrice(200,300,400,500,600));  //output-> [400,500,600] //bcz val1=200 and val2=300, and rest of the values are stored in num1 as arrays.
*/

/*
//pasing an object into the function.

// const user={
//     username:"Vinay",
//     price:"999"
// }

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user);

//you can also pass an object directly while calling a function, despite of making an individual object like user.
handleObject({
    username:"Kumar",
    price:399
})
*/

/*
//passing an array into the function

const arr=[100,200,300,400,500];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(arr));

//you can also pass the array directly while calling the function.
console.log(returnSecondValue([100,200,300,400,500]));
*/
