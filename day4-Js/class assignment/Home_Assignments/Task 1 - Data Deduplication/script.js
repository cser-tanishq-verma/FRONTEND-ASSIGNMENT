let str = "this is is a test test";

let words = str.split(" ");
let result = [];

for (let i = 0; i < words.length; i++) {
  if (!result.includes(words[i])) {
    result.push(words[i]);
  }
}

console.log(result.join(" ")); // this is a test

let arr = [1, 2, 2, 3, 4, 4];

let resultArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!resultArr.includes(arr[i])) {
    resultArr.push(arr[i]);
  }
}

console.log(resultArr); // [1, 2, 3, 4]
