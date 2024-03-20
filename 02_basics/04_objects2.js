//const tinderuser=new Object() //output-> {}  //singleton object

const tinderuser={} //output-> {}  //non-singleton object
tinderuser.id="1234abc",
tinderuser.name="Vinay",
tinderuser.isloggedin=false
//console.log(tinderuser);

//we can pass multiple objects also in 1 object
const regularuser={       //main object
    email:"1926kumarvinay@gmail.com",
    fullname:{            //1st nested object
        userfullname:{    //2nd nested object
            first:"Vinay",
            last:"Kumar"
        }
    }
}
//console.log(regularuser.fullname.userfullname.first)


//merge multiple objects
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

//ways for merging
//const obj3={obj1,obj2};   
//const obj3=Object.assign({},obj1,obj2);

//spread operator  // best way to merge for both arrays and objects.
const obj3={...obj1,...obj2}  // easy, simple and latest way to merge multiple objects.
//console.log(obj3);


console.log(tinderuser) //output-> { id: '1234abc', name: 'Vinay', isloggedin: false }
console.log(Object.keys(tinderuser))  //output-> [ 'id', 'name', 'isloggedin' ]  //all keys in arrays.
console.log(Object.values(tinderuser))  //output-> [ '1234abc', 'Vinay', false ]  //all values of keys in arrays.
console.log(Object.entries(tinderuser)) //output-> [ [ 'id', '1234abc' ], [ 'name', 'Vinay' ], [ 'isloggedin', false ] ]  //it will give in array of arrays,
//it will keep each key value pair in single array in which 1st value will be key and 2nd value will be value and so on..in one array.

//you can also ask whether it contains the asked property or not. output-> true/false
console.log(tinderuser.hasOwnProperty('isloggedin'))  //output-> true