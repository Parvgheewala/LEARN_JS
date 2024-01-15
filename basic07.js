function SayMyname() {
    console.log('P');
    console.log('A');
    console.log('R');
    console.log('V');
}

// SayMyname()

// function AddTWO(number1, number2){
//     console.log(number1+number2);
// }



function AddTWO(number1, number2){
    // let result = number1 + number2
    // return result
    return number1+number2
}

//AddTWO(3,null)

const result = AddTWO(3,5)


// console.log(result);

function LoginUserMess(UserName="Sam"){
    if(!UserName){
        console.log("Please enter a username");
        return
    }

    return  `${UserName} just logged in`
}

// console.log(LoginUserMess("Parv"));

// console.log(LoginUserMess());

function CalcCartPrice(...num1){
    return num1
}

// console.log(CalcCartPrice(2,5,3,4,6));

const user = {
    userName : "Parv",
    Price: 199

}

function HandleObj(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.Price}`);
}

// HandleObj(user)

// HandleObj({
//     userName:"Parv",
//     Price:199
// })

const mynewArray = [200,300,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray));

console.log(returnSecondValue([200,600,7,800]));