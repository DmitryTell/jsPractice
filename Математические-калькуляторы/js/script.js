'use strict';

//Quadratic Equation
;((parent, result, inputs, button) => {
    const resultElement = document.querySelector(parent).querySelector(result);
    const numberElements = document.querySelector(parent).querySelectorAll(inputs);
    const buttonElement = document.querySelector(parent).querySelector(button);

    let isReset = false;

    const checkButton = () => buttonElement.textContent = (isReset ? 'Сброс' : 'Решить');

    checkButton();
    buttonElement.addEventListener('click', () => {
        let [a, b, c] = [...numberElements].map(el => +el.value);

        if (isReset) {
            resultElement.textContent = 'Здесь будет ответ...';
            [...numberElements].map(el => el.value = '');
        } else {
            let D = b ** 2 - 4 * a * c;

            if (D > 0) {
                resultElement.innerHTML = `X<sub>1</sub> = ${(-b + Math.sqrt(D)) / (2 * a)} X<sub>2</sub> = ${(-b - Math.sqrt(D)) / (2 * a)}`;
            } else if (D === 0) {
                resultElement.textContent = `X = ${-b / (2 * a)}`;
            } else {
                resultElement.textContent = 'Нет действительных корней.';
            }
        }

        isReset = !isReset;
        checkButton();
    });
})('#first-calc', '#first-result', 'input', '#first-solution');

//Piphagor's Triple
;((parent, result, inputs, button) => {
    const resultElement = document.querySelector(parent).querySelector(result);
    const numberElements = document.querySelector(parent).querySelectorAll(inputs);
    const buttonElement = document.querySelector(parent).querySelector(button);

    let isReset = false;

    const checkButton = () => buttonElement.textContent = (isReset ? 'Сброс' : 'Проверить');

    checkButton();
    buttonElement.addEventListener('click', () => {
        let [a, b, c] = [...numberElements].map(number => +number.value);

        if (isReset) {
            resultElement.textContent = 'Здесь будет ответ...';
            [...numberElements].map(el => el.value = '');
        } else {
            switch (Math.max(a, b, c)) {
                case a:
                    resultElement.textContent = `Числа ${a}, ${b} и ${c} ${(a ** 2) === b ** 2 + c ** 2 ? 'являются' : 'не являются'} тройкой Пифагора`;
                    break;
                case b:
                    resultElement.textContent = `Числа ${a}, ${b} и ${c} ${(b ** 2) === a ** 2 + c ** 2 ? 'являются' : 'не являются'} тройкой Пифагора`;
                    break;
                case c:
                    resultElement.textContent = `Числа ${a}, ${b} и ${c} ${(c ** 2) === b ** 2 + c ** 2 ? 'являются' : 'не являются'} тройкой Пифагора`;
                    break;
            }
        }

        isReset = !isReset;
        checkButton();
    });
})('#second-calc', '#second-result', 'input', '#second-solution');

//Divisors Of Number
;((parent, result, input, button) => {
    const resultElement = document.querySelector(parent).querySelector(result);
    const numberElement = document.querySelector(parent).querySelector(input);
    const buttonElement = document.querySelector(parent).querySelector(button);

    let isReset = false;

    const checkButton = () => buttonElement.textContent = (isReset ? 'Сброс' : 'Найти');
    const getDivisors = num => {
        let res = [];

        for (let i = 2; i < num; i++) {
            if (num % i === 0) res.push(i);
        }

        return res.join(', ');
    }

    checkButton();
    buttonElement.addEventListener('click', () => {
        if (isReset) {
            resultElement.textContent = 'Здесь будет ответ...';
            numberElement.value = '';
        } else {
            resultElement.textContent = `Делители числа ${numberElement.value}: ${getDivisors(+numberElement.value).length > 0 ? getDivisors(+numberElement.value) : 'данное число простое, оно не имеет делителей.'}`;
        }

        isReset = !isReset;
        checkButton();
    });
})('#third-calc', '#third-result', 'input', '#third-solution');

//Common Divisors Of Numbers
;((parent, result, inputs, button) => {
    const resultElement = document.querySelector(parent).querySelector(result);
    const numberElements = document.querySelector(parent).querySelectorAll(inputs);
    const buttonElement = document.querySelector(parent).querySelector(button);

    let isReset = false;

    const checkButton = () => buttonElement.textContent = (isReset ? 'Сброс' : 'Найти');
    const getDivisors = num => {
        let res = [];

        for (let i = 2; i < num; i++) {
            if (num % i === 0) res.push(i);
        }

        return res;
    }
    const getCommonDivisors = (num1, num2) => {
        let arr1 = getDivisors(num1);
        let arr2 = getDivisors(num2);
        let res = [];

        for (let elem of arr1) {
            if (arr2.includes(elem)) res.push(elem);
        }

        return res.join(', ');
    }

    checkButton();
    buttonElement.addEventListener('click', () => {
        let [a, b] = [...numberElements].map(number => +number.value);

        if (isReset) {
            resultElement.textContent = 'Здесь будет ответ...';
            [...numberElements].map(number => number.value = '');
        } else {
            resultElement.textContent = `Общие делители чисел ${a} и ${b}: ${getCommonDivisors(a, b).length > 0 ? getCommonDivisors(a, b) : 'общих делителей нет.'}`;
        }

        isReset = !isReset;
        checkButton();
    });
})('#fourth-calc', '#fourth-result', 'input', '#fourth-solution');

//Max Common Divisor Of Numbers
;((parent, result, inputs, button) => {
    const resultElement = document.querySelector(parent).querySelector(result);
    const numberElements = document.querySelector(parent).querySelectorAll(inputs);
    const buttonElement = document.querySelector(parent).querySelector(button);

    let isReset = false;

    const checkButton = () => buttonElement.textContent = (isReset ? 'Сброс' : 'Найти');
    const getDivisors = num => {
        let res = [];

        for (let i = 2; i < num; i++) {
            if (num % i === 0) res.push(i);
        }

        return res;
    }
    const getCommonDivisors = (num1, num2) => {
        let arr1 = getDivisors(num1);
        let arr2 = getDivisors(num2);
        let res = [];

        for (let elem of arr1) {
            if (arr2.includes(elem)) res.push(elem);
        }

        return res;
    }

    checkButton();
    buttonElement.addEventListener('click', () => {
        let [a, b] = [...numberElements].map(number => +number.value);

        if (isReset) {
            resultElement.textContent = 'Здесь будет ответ...';
            [...numberElements].map(number => number.value = '');
        } else {
            resultElement.textContent = `Общие делители чисел ${a} и ${b}: ${getCommonDivisors(a, b).length > 0 ? Math.max(...getCommonDivisors(a, b)) : 'общих делителей нет.'}`;
        }

        isReset = !isReset;
        checkButton();
    });
})('#fifth-calc', '#fifth-result', 'input', '#fifth-solution');

//Min Divident Of Numbers
;((parent, result, inputs, button) => {
    const resultElement = document.querySelector(parent).querySelector(result);
    const numberElements = document.querySelector(parent).querySelectorAll(inputs);
    const buttonElement = document.querySelector(parent).querySelector(button);

    let isReset = false;

    const checkButton = () => buttonElement.textContent = (isReset ? 'Сброс' : 'Найти');
    const getMinDivident = (a, b) => {
        for (let i = 1; ; i++) {
            if (i % a === 0 && i % b === 0) return i;
        }
    }

    checkButton();
    buttonElement.addEventListener('click', () => {
        let [a, b] = [...numberElements].map(number => +number.value);

        if (isReset) {
            resultElement.textContent = 'Здесь будет ответ...';
            [...numberElements].map(number => number.value = '');
        } else {
            resultElement.textContent = `Наименьшее число, делимое на ${a} и ${b} - ${getMinDivident(a, b)}`;
        }

        isReset = !isReset;
        checkButton();
    });
})('#sixth-calc', '#sixth-result', 'input', '#sixth-solution');