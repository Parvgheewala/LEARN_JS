//singleton 

// object literals

// Object.create

const mySym = Symbol("Key1")

const JsUser = {
    name: "Parv",
    "Full name": "Parv Gheewala",
    age: 18,
    [mySym]: "Key1",
    location: "Surat",
    email: "PGG@google.com",
    isLoggedIn: false,
    lastLoggin: ["Mon","Wed"] 
}

myarray = ["P","i"]

// console.log(myarray[0]);
// console.log(JsUser.email);
// console.log(JsUser["email"]);

console.log(JsUser["Full name"]);
console.log(JsUser["email"]);
console.log(JsUser[mySym] );
console.log(typeof JsUser.mySym);

