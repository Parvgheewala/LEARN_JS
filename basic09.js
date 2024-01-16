const user = {
    username: "Parv",
    price: 199,


    welcomeMess: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMess()

// user.username = "Sam"
// // user.welcomeMess()
// console.log(this);

function one(){
    let username = "Pg"
    console.log(this)
}

// one()

// const chai = function(){
//     let username = "Pg"
//     console.log(this.username)
// }
const chai = () => {
    let username = "Pg"
    console.log(this)
}

// chai() 

// const AddTwo =(num1,num2)=>{
//     return num1 + num2
// }
// const AddTwo =(num1,num2)=>  num1 + num2

// const AddTwo =(num1,num2)=>  (num1 + num2)

    const AddTwo =(num1,num2)=>  ({username: "Pgg"})

console.log(AddTwo(3,5));

