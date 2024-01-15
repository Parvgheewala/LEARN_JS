const tinder = new Object()
const tinder2 = {}

tinder.id = "123abc"
tinder.name = "Sammy"
tinder.loggedIn = false

// console.log(tinder)

const regularUser ={
    email: "abc@google.com",
    fullName: {
        UserName:{
            Fname: "Parv" ,
            Lname: "G"
        }
    }
}

// console.log(regularUser.fullName.UserName);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
const obj3 ={5:"a", 6:"b"}

// console.log(obj3);

obj4 = Object.assign(obj1,obj2,obj3)
obj5 = Object.assign({},obj1,obj2,obj3)

// console.log(obj4);
// console.log(obj5);

const user =[ 
    {
        id:1,
        email:"abcc@gmail.com"
    },
    {
        id:1,
        email:"abcc@gmail.com"
    },
    {
        id:1,
        email:"abcc@gmail.com"
    },
    {
        id:1,
        email:"abcc@gmail.com"
    }

]

user[1].email

// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('loggedIn'));

const course ={
    coursename: "JS in Hindi",
    price:"999",
    courseInstructor: "HC"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


