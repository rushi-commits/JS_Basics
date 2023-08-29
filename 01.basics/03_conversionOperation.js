let score = "33";

console.log(typeof score);

let intNumber = Number(score);
console.log(intNumber);
console.log(typeof intNumber);
// "33" => 33
// "33abc" => NaN
// true => 1 ;false => 0

let num1 = 1;
console.log(Boolean(num1)); // output will be true
let num2 = "some";
console.log(Boolean(num2)); // output will be true
let num3 = "";
console.log(Boolean(num3)); // output will be false
let num4 = 0;
console.log(Boolean(num4)); // output will be false

// 1 => true ; 0 => false
// "hitesh" => true

let stringNumber = 33;
console.log(typeof String(stringNumber));
