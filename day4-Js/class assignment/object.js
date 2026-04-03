// let obj={
//     name:"tanishq",
//     age:23,
//     address:{
//         city:"jaipur",
//         state:"rajasthan"
//     },
//     printDetails:function(){
//         console.log(`${this.name}`);
//     },
// }
// console.log(obj);
// obj.printDetails();
// Object.seal(obj);
// Object.isSealed(obj);
// Object.isFrozen(obj);

//the variable should be same as the key of the object
// let{name,address}=obj;
// console.log(name);
// console.log(address);

// let arr=[1,2,3,4,5]
// let [a,b,,c]=arr;
// console.log(a,b,c);

// 

//spread operator
// let copyArr=[...arr]
// console.log(copyArr);
// let copyObj={...obj}
// console.log(copyObj);

//rest parameter
// function name(a,...arr){
//     console.log(a);
//     console.log(arr);
// }
// //rest parameter should be at the end of the parameter list
// name(1,2,3,4,5);

//modules
/*
default export => one default export per script
named export => you have to use thr same while importing
*/

// export function func(){ // named export
//     console.log("this is a function");
// }
// export default func; //default export
//type in the script tag as module


//timer functions


//fetch api
async function getData() {
    let data=await fetch('https://api.escuelajs.co/api/v1/products');
    let d=await data.json();
    console.log(d);
}
getData();
