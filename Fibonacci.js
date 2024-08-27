//For Loop
function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));

//While Loop

function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 2;
    while (i < num) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;
    }
    return num2;
}

console.log("Fibonacci(5): " + fibonacci(15));
console.log("Fibonacci(8): " + fibonacci(18));

//Recursiv 

function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));

//Method generator

function GenerateFibonacci(number) {
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}
var f = GenerateFibonacci(10);
console.log(f);
