'use strict'
// Первая задача на рекурсию:

const userNumberOne = +prompt('Введите любое число');
const userNumberTwo = +prompt('Введите ещё одно число');

let minValue;
let maxValue;
const randomArr = [];

if (userNumberTwo > userNumberOne) {
    maxValue = userNumberTwo;
    minValue = userNumberOne;
}
else {
    maxValue = userNumberOne;
    minValue = userNumberTwo;
}
console.log(`Я загадала число в вашем диапазоне от ${minValue} до ${maxValue}`);

const attempts = Math.round(0.3 * (maxValue - minValue));
if ((maxValue === 100) && (minValue === 50)) {
    attempts = 15
}
// console.log(`попыток: ${attempts}`);

const myNumber = Math.round(Math.random() * (maxValue - minValue + 1)) + minValue;
console.log(`загаданно число: ${myNumber}`);

const guessNumber = (shot) => {
    if (shot === 0) {
        console.log(`Game over!`);
        return
    } else {
        const userNumber = +prompt('Попробуйте угадать моё число');
        if (myNumber === userNumber) {
            console.log(`Правильно!`);
            return
        }
        if (randomArr.includes(userNumber)) {
            console.log(`Это число вы уже вводили!`);
            guessNumber(shot);

        }
        else
            if (myNumber > userNumber) {
                console.log(`Больше!`);
                randomArr.push(userNumber);
                guessNumber(shot - 1);

            }
            else {
                console.log(`Меньше!`)
                randomArr.push(userNumber);
                guessNumber(shot - 1);
            }
    }
}

if (Number.isFinite(userNumberOne) === false ||
    Number.isFinite(userNumberTwo) === false) {
    console.log(`Введи числa!`)
} else {
    guessNumber(attempts);
}
