const name="Vinay";
const age=21;

//console.log(name+ age+"kumar");  // but this is not the good way to concatenate the Strings. Use backtick `` instead. 

//console.log(`My name is ${name} and my age is ${age} and my last name is kumar`); //modern way to concatenate the Strings.

//Another way to declare the string.
const gameName=new String('Vinay');
console.log(gameName[0]); //V
console.log(gameName.length);  //5
console.log(gameName.toUpperCase()); //VINAY
console.log(gameName.charAt(2));// it will give small n,bcz the original value remains unchanged bcz it is primitive data type.
console.log(gameName.indexOf('V'));//gives you the position of 'V', i.e, 0.
const str=gameName.substring(0,3);
console.log(str); //Vin
const str2=gameName.slice(-5,3);//need to study more about this.
console.log(str2);
const str3="    Vinay     ";
console.log(str3);//it will print exactly the same output with spaces.
console.log(str3.trim());//it will trim the unwanted space and will print only the name.
const url="vinay@gmail%.com";  
console.log(url.replace('%','-'));
console.log(url.includes("vinay")); //if it includes it will print true, else false.

//You can convert the string into array based on the requirements.
//suppose I have a variable name S1 and assigned a value to it having '-' in between them,
//and want split the string into array whereever it finds '-'.
let S1="My-name-is-Vinay-Kumar";
console.log(S1.split('-'));//it will give the output into an array. ex-> [ 'My', 'name', 'is', 'Vinay', 'Kumar' ]


//for more about Strings go on mdn and revise.