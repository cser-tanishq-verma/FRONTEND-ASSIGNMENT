const arr = [10, 20, 30];
console.log('initial:', arr);

const pushValue = 40;
arr.splice(arr.length, 0, pushValue);
console.log('after splice push:', arr); 

const popResult = arr.splice(arr.length - 1, 1);
console.log('popped value:', popResult[0]); 
console.log('after splice pop:', arr); 

arr.splice(1, 0, 15); 
console.log('insert 15 at index 1:', arr);
arr.splice(2, 2); 
console.log('remove two elements at index 2:', arr); 
