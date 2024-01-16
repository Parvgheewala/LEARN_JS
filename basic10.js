//IIFE

// function chai(){
//     console.log(`DB connected`);
// }

// chai()


(function chai(){
    console.log(`DB connected`);
})();


( (name)=> {
    console.log(`DB Connected two ${name}`);
} )("Pgg")