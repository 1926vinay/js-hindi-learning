const accountId = 144553
let accounEmail = "1926kumarvinay@gmail.com"
var accountPassword = "1234"
accountCity = "Patna" // also a way to declare the variable, but not a good practice.
let accountState; // it will give the value undefined, until you assign a value to it.

// accountId=2 // can't declare constant variables twice in the code.
/*
prefer not to use var 
bacause of issues in block scope({}), and functional scope
*/

accountEmail="hc@gmail.com"
accountPassword="2121"
accountCity="rajasthan"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); // it will give the result in tabular format. Just type variable names in square brackets, ex-> [variable_name1,variabl_name2...]