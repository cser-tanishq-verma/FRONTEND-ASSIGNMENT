//only declaration
var a;
let b;

const c = 10; //must be initialized at the time of declaration

//declaration and initialization
var x = 10;
let y = 20;

//initialization
a=20;
b='qwer';

//re-declaration
var a = 30; //allowed
//let b = 'asdf'; //not allowed, will throw an error

//!declaration +   initialization
let v1=1236547;
var v2=1236547;
const v3=1236547;

//reinitialization
v1="qwerty";
v2="piuoty";
//v3=qwerty; //not allowed, will throw an error
console.log(v1);
console.log(v2);
console.log(v3);

//console.log(window.x); //global object in browser rte
//window will give error in node rte, as it is not defined in node


