//1
let a = 10;
let b = 5;
let c = 2;
console.log(a + b + c);
console.log(a + c - b);
console.log(a * b / c);
console.log(a % b);
//2
let x = 7; 
console.log(x++ + ++x);
console.log(x-- - --x);
//3
console.log("The result is: " + String(a+b));
//4
console.log(a > b && a > 0 && b > 0);
console.log(c < 10 || c===2);
console.log(a / c != 5);
//5
console.log(10 == '10');// Без учета типов данных
console.log(10 === '10');// С учетом типов данных
//6
console.log(x % 2 == 0 || x % 3 == 0 && x % 6 != 0);
let y = prompt('y=');
console.log(!(y > 10 || y < 5 ))
