//we can declare object in js with two ways  1st.) literal & 2nd.) constructor,
//when we create object with constructor then "singleton" objects form and 
//if we make in another way i.e, from literals, then it wil have multiple instances.

//singleton
// Object.create   //creating object with constructor method have singleton(discuss later)

// object literals // creating object with literals method
const mySym = Symbol("key1") //way to create symbols

const JsUser = {
   
    name: "Vinay",
    "fullname": "Vinay Kumar",
    age: 21,
    location: "Patna",
    email: "1926kumarvinay@gmail.com",
    arr:[1,2,3,4,5],   // we can pass the arrays also
    [mySym]: "mykey1" //this is a way to declare symbol and it's datatype[mySym] will be symbol not string as above like email,location,age,etc., //Interview ques
}

// how to access object in js (outside the objects)

//There are two ways 

// 1.) console.log(JsUser.email)// in this method there is no need to write in double quote //this is not best way to access objects.
// 2.) console.log(JsUser["email"])// here need of double quote because it takes email as string ,

// console.log(JsUser["fullname"])
// console.log(JsUser[mySym])

//update/change
JsUser.email = "hjjsgyfvcjhh@gamil.com" 

//lock the value
//Object.freeze(JsUser) //locking the object
JsUser.email = "gfdshjuik@gmail.com"    
//console.log(JsUser)


//function 1
JsUser.greeting=function(){
    console.log("Hello js world");
}
//console.log(JsUser.greeting()); //it will simply execute -> Hello js world
//console.log(JsUser.greeting); // it will return -> [Function (anonymous)] //as function is not executed , it has just gave the reference

JsUser.greeting2=function(){
    console.log(`hello js user,${this.email}`)//this , bcz we are accessing inside the same object.
}
//console.log(JsUser.greeting2());
