const greet = (name) => `hello,${name}`;

const sum = (x, y) => x + y;

const squaresNum = (num) => console.log(num * num);

const arr = (arr) => {
  const newArr = [];
  for (let counter = 0; counter < arr.length; counter++) {
    newArr.push(arr[counter] * arr[counter]);
  }
  return newArr;
};
console.log(arr([2, 4, 5]));
