// let x=5;
// console.log(x);

// let arr: number[] = [1, 2, 3, 4, 5];
// console.log(arr);

// let xyz:[number] = [10, 20, 30];
// console.log(xyz);

// let abc:[number,boolean,string]=[1,false,"hello"];
// console.log(abc);
// let vbn:[number,number,number]=[10,20,30];
// console.log(vbn);

// interface Human{
//     name:string;
//     age:number;
// }
// let qwe:[number,boolean,Human]=[10,true,{name:"Tanishq",age:23}];
// console.log(qwe);

// function add(a:number,b:number){
//     return a+b;
// }
// console.log(add(60, 9));

// function multiply(a:number,b:number){
//     return a*b;
// }
// console.log(multiply(3, 23));

// function processNumber(num:number, callback:(result:number)=>void){
//     let result = num * 2;
//     callback(result);
// }
// processNumber(5, (result)=>{
//     console.log("Processed result:", result);
// });


// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }   
// }
// let person1 = new Person("Tanishq", 23);
// console.log(person1);

// let a:any = 10;
// console.log(a);
// a="Hello";
// console.log(a);
// a=true;
// console.log(a);


type customType = number | string | boolean;

let variable: customType;
variable = 42;
console.log(variable);
variable = "Hello, TypeScript!";
console.log(variable);
variable = true;
console.log(variable);


