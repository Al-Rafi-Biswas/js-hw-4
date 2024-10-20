// 1 no problem..................

// let num1 = 22;
// let num2 = 23;

function addNumbers(num1, num2) {
  return console.log(num1 + num2);
}
addNumbers(2, 4);

// 2 no problem..........................

function sumUpToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return console.log(sum);
}

sumUpToN(9);

// 3 no problem......................

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumArray(array) {
  let sum = 0;

  for (let i = 1; i <= array.length; i++) {
    sum = sum + array.length;
  }
  return sum;
}

console.log(sumArray(array));

// 4 no problem.......................

let numbers = [22, 33, 44, 32, 42, 11, 31];

function countEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers[i]; i++) {
    if (numbers[i] % 2 === 0) {
      sum++;
    } else {
      console.log(numbers[i] + " It is an Odd number");
    }
  }

  return console.log(sum);
}

countEvenNumbers(numbers);

// 5 no problem............................
let str = [2, 33, 43, 67];
function stringLength(str) {
  return console.log("this is an string number " + str.length);
}

stringLength(str);
