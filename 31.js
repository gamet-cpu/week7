let num = prompt('Число: ');
if (num > 10) {
    console.log("Число больше 10");
}
else {
    console.log("Число меньше или равно 10");
}


let conf = confirm('Delete file?');
if (conf) {
    console.log("Файл удален");
}
else {
    colsole.log("Удаление отменено");
}


let age = prompt('Возраст: ');
if (age < 18) {
    console.log("Вы еще подросток");
}
else if (age<30) {
    console.log("Вы молодой взрослый");
}
else {
    console.log("Вы взрослый");
}
let nums = prompt('Number: ');
let two = (nums % 2 == 0) ? "Четное число":"Нечетное число";
console.log(two);


let day = prompt("Day:");
let letterday;
switch (day){
    case '1':
        letterday = 'Понедельник';
        break;
    case '2':
        letterday = "Вторник";
        break;
    case '3':
        letterday = 'Среда';
        break;
    case '4':
        letterday = 'Четверг';
        break;
    case '5':
        letterday = 'Пятница';
        break;
    case '6':
        letterday = 'Суббота';
        break;
    case '7':
        letterday = 'Воскресенье';
        break;
    default:
        letterday = "Некорректное значение";
        break;

}
console.log(letterday);


let a = Number(prompt('a:'));
let b = Number(prompt('b:'));
if (a == b) {
    console.log("Числа равны");
}
else{
    let answ = (a > b) ? "Первое число больше":"Второе число больше";
    console.log(answ);
}


let month = parseInt(prompt("Введите номер месяца (1-12):"));

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;
    default:
        console.log("Неверный номер месяца");
}