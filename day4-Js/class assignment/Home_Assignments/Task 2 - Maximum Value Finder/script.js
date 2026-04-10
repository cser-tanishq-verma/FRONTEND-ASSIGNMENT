let arr = [1, 2, 3, 4, 6];

let max = arr[0];

for (let num of arr) {
  if (num > max) {
    max = num;
  }
}

console.log(max);
