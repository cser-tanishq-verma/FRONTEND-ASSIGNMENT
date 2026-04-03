//Named function
function nm(name){
    console.log("Hello "+name);
}
nm("Tanya");

//function expression
let greet = function(){
    console.log("anonymous function");
}

//anonymous function
let temp=function(a,b){
    return a+b;
}

//arrow function
const add = (a,b) => a+b;

let z =function sum(a,b){
    return(a+b);
}
function calc(a,b,opFn){
    console.log(opFn(a,b));
}
calc(10,20,z);