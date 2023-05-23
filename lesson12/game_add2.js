'use strict';
// Третья дополнительная задача:

window.RSP2 = (() => {
    const FIGURE_ENG = ['rock', 'scissors', 'paper'];
    const FIGURE_RUS = ['камень', 'ножницы', 'бумага'];

    const minValue = 1;
    const maxValue = 3;
    let anyChoice = '';

    const result = {
        player: 0,
        computer: 0,
    };

    const game = (language) => {
        const array = language === 'EN' || language === 'ENG'
            ? FIGURE_ENG : FIGURE_RUS;

        const userChoice = language === 'EN' || language === 'ENG'
            ? prompt(`Enter '${array[0]}', '${array[1]}' or '${array[2]}'`)
            : prompt(`Введите '${array[0]}', '${array[1]}' или '${array[2]}'`);
        let correctUserChoice = '';

        const playRSP = (lastChoice) => {

            if (lastChoice === null) {
                if (language === 'EN' || language === 'ENG') {
                    const beSure = confirm(`Are you sure to leave the game?`);
                    if (beSure == true) {
                        return console.log(`Game over!\nThe final score:\n you - ${result.player}, computer - ${result.computer}`);
                    }
                } else {
                    const beSure = confirm(`Вы точно хотите выйти?`);
                    if (beSure == true) {
                        console.log(`Игра окончена!\nОбщий счёт игры:\n вы - ${result.player}, компьютер - ${result.computer}`);
                        return
                    }
                }
            } else {
                let choiceNumber = 0;
                const getNumberChoice = (text) => {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i].includes(text.toLowerCase())) {
                            choiceNumber = array.length - i;
                            return choiceNumber;
                        }
                    };
                    if (choiceNumber === 0) {
                        if (language === 'EN' || language === 'ENG') {
                            console.log(`You have entered incorrect data. Let's try again.`);
                        } else {
                            console.log(`Вы ввели некорректные данные. Попробуйте ещё раз.`);
                        }
                    };
                };
                const userNumber = getNumberChoice(lastChoice);

                const computerNumber = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
                const getStringChoice = (num) => {
                    for (let i = 0; i < array.length; i++) {
                        if (num === i + 1) {
                            return anyChoice = array[array.length - num];
                        }
                    }
                };
                const computerChoice = getStringChoice(computerNumber);

                correctUserChoice = getStringChoice(userNumber);

                const compareNumbers = (number1, number2) => {
                    if (number1 === number2) {
                        if (language === 'EN' || language === 'ENG') {
                            alert(`This outcome:\n you as well computer- ${correctUserChoice}.
            The final score:\nyou - ${result.player},\ncomputer - ${result.computer}`);
                        } else {
                            alert(`В этот раз ничья:\n и вы, и компьютер- ${correctUserChoice}.
            Общий счёт игры:\nвы - ${result.player},\nкомпьютер - ${result.computer}`);
                        }
                    } else
                        if (number1 === 1 && number2 === 3) {
                            result.computer += 1;
                            if (language === 'EN' || language === 'ENG') {
                                alert(`This time computer wins.:\n you -'${correctUserChoice}', computer - '${computerChoice}'. 
                The final score:\nyou - ${result.player},\n computer - ${result.computer}`);
                            } else {
                                alert(`В этот раз выиграл компьютер:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                Общий счёт игры:\n вы - ${result.player},\n компьютер - ${result.computer}`);
                            }
                        } else
                            if (number2 === 1 && number1 === 3) {
                                result.player += 1;
                                if (language === 'EN' || language === 'ENG') {
                                    alert(`This time you win.:\n you -'${correctUserChoice}', computer - '${computerChoice}'. 
                The final score:\nyou - ${result.player},\n computer - ${result.computer}`);
                                } else {
                                    alert(`В этот раз выиграли вы:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                    Общий счёт игры:\n вы - ${result.player}, \n компьютер - ${result.computer}`);
                                }
                            } else
                                if (number1 > number2) {
                                    result.computer += 1;
                                    if (language === 'EN' || language === 'ENG') {
                                        alert(`This time computer wins.:\n you -'${correctUserChoice}', computer - '${computerChoice}'. 
                The final score:\nyou - ${result.player},\n computer - ${result.computer}`);
                                    } else {
                                        alert(`В этот раз выиграл компьютер:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                Общий счёт игры:\n вы - ${result.player},\n компьютер - ${result.computer}`);
                                    }
                                } else
                                    if (number2 > number1) {
                                        result.player += 1;
                                        if (language === 'EN' || language === 'ENG') {
                                            alert(`This time you win.:\n you -'${correctUserChoice}', computer - '${computerChoice}'. 
                The final score:\nyou - ${result.player},\n computer - ${result.computer}`);
                                        } else {
                                            alert(`В этот раз выиграли вы:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                    Общий счёт игры:\n вы - ${result.player}, \n компьютер - ${result.computer}`);
                                        }
                                    };
                };
                compareNumbers(computerNumber, userNumber);
            };

            const userChoice = language === 'EN' || language === 'ENG'
                ? prompt(`Enter '${array[0]}', '${array[1]}' or '${array[2]}'`)
                : prompt(`Введите '${array[0]}', '${array[1]}' или '${array[2]}'`);

            playRSP(userChoice);
        };
        playRSP(userChoice);
    };
    return {
        game,
    };
})();
