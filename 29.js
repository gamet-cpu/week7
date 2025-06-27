let num1 = 1;
const num2 = 1;
console.log(num1);
console.log(num2);
num1 = 2;
//num2 = 2; //Невозможно т.к. const не изменяется
console.log(num1);
//console.log(num2);
var num = 1;//var в отличии от const и let может быть повторно объявлена и изменена, но считается устаревшей т.к. использовалась до ES6 и является менее надежной
console.log(num);
let number = 1;
console.log(typeof(number));
let string = 'qwerty';
console.log(typeof(string));
let boolean = true;
console.log(typeof(boolean))
let undefinedValue;
console.log(typeof(undefinedValue));
let nuull = null;
console.log(typeof(nuull));
let notanumber = NaN;
console.log(typeof(notanumber));
let num3 = 123;
num3 = String(num3);
console.log(num3);
let num4 = '123';
num4 = Number(num4)
console.log(num4) 
//undefinedValue = String(undefinedValue)//Невозможно преобразовать в строку отсутствие чего либо
//nuull = Number(nuull)//Невозможно преобразовать в число не обозначенное значение
//console.log(typeof(undefinedValue));
//console.log(typeof(nuull));
let name = prompt("Как тебя зовут?");
let age = prompt('Сколько тебе лет?');
console.log(name,age)

