const arr=[1,2,3,4];

arr.forEach(element => {
    console.log(element);
});   

//map method
const result =arr.map(element => element * 2);
console.log(result);

//filter method
const filter=arr.filter(element => element % 2 === 0);
console.log(filter);

//reduce method
const sum=arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);