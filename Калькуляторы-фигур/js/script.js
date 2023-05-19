'use strict';

const selectFigure = document.querySelector('#select-figure');
const selectCalc = document.querySelector('#select-calc');
const showElement = document.querySelector('#show');
const countElement = document.querySelector('#count');
const buttonResult = document.querySelector('#result');

let isReset = false;
let whatCount;
let figures = [
    {
        name: 'квадрат',
        calcs: ['Площадь', 'Периметр'],
        a: `Сторона a = <input type="number" id="a">`,
        b: false,
        c: false,
        r: false,
        formula: ['a ** 2', '4 * a'],
        what: 'Квадрат-'
    },
    {
        name: 'прямоугольник',
        calcs: ['Площадь', 'Периметр'],
        a: `Сторона a = <input type="number" id="a">`,
        b: `Сторона b = <input type="number" id="b">`,
        c: false,
        r: false,
        formula: ['a * b', '2 * (a + b)'],
        what: 'Прямоугольник-'
    },
    {
        name: 'круг',
        calcs: ['Площадь', 'Длина окружности'],
        a: false,
        b: false,
        c: false,
        r: `Радиус r = <input type="number" id="r">`,
        formula: ['π * r ** 2', '2 * π * r'],
        what: 'Круг-'
    },
    {
        name: 'треугольник',
        calcs: ['Площадь'],
        a: `Сторона a = <input type="number" id="a">`,
        b: `Сторона b = <input type="number" id="b">`,
        c: `Сторона c = <input type="number" id="c">`,
        r: false,
        formula: ['sqrt: p * (p - a) * (p - b) * (p - c), p = (a + b + c) / 2'],
        what: 'Треугольник-'
    }
];

const renderFigures = () => {
    selectFigure.innerHTML += figures.map((fig, i) => {
        return `<option value="${i}">${fig.name[0].toUpperCase() + fig.name.slice(1)}</option>`;
    }).join('');
}
const renderCalcs = () => {
    selectCalc.innerHTML += figures[+selectFigure.value].calcs.map((calc, i) => {
        return `<option value="${i}">${calc}</option>`;
    }).join('');

    selectCalc.classList.remove('hidden');
    selectFigure.classList.add('hidden');
}
const renderContent = () => {
    showElement.textContent = `${figures[+selectFigure.value].calcs[+selectCalc.value]} ${figures[+selectFigure.value].name}а рассчитывается по формуле: ${figures[+selectFigure.value].formula[+selectCalc.value]}`;

    countElement.innerHTML = `<p class="content__value">${figures[+selectFigure.value].a ? figures[+selectFigure.value].a : ''}</p>
    <p class="content__value">${figures[+selectFigure.value].b ? figures[+selectFigure.value].b : ''}</p>
    <p class="content__value">${figures[+selectFigure.value].c ? figures[+selectFigure.value].c : ''}</p>
    <p class="content__value">${figures[+selectFigure.value].r ? figures[+selectFigure.value].r : ''}</p>`;

    whatCount = figures[+selectFigure.value].what + figures[+selectFigure.value].calcs[+selectCalc.value];
}
const checkButton = () => {
    if (isReset) {
        buttonResult.textContent = 'Сбросить';
    } else {
        buttonResult.textContent = 'Рассчитать';
    }
}

const getSquare = a => a ** 2;
const getPerimeter = a => a * 4;
const getRectSquare = (a, b) => a * b;
const getRectPerimeter = (a, b) => 2 * (a + b);
const getCircleSquare = r => Math.PI * r ** 2;
const getCircleLength = r => 2 * Math.PI * r;
const getTriangleSquare = (a, b, c) => {
    let p = (a + b + c) / 2;

    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

renderFigures();
checkButton();
selectFigure.addEventListener('change', renderCalcs);
selectCalc.addEventListener('change', renderContent);
buttonResult.addEventListener('click', () => {
    let a = document.querySelector('#a');
    let b = document.querySelector('#b');
    let c = document.querySelector('#c');
    let r = document.querySelector('#r');

    if (isReset) {
        selectCalc.classList.add('hidden');
        selectFigure.classList.remove('hidden');
        selectFigure.innerHTML = `<option disabled selected>Выберите фигуру</option>`;
        selectCalc.innerHTML = `<option disabled selected>Что рассчитывать?</option>`;

        renderFigures();

        showElement.innerHTML = 'Здесь будет показан результат...';
        countElement.innerHTML = 'Здесь будут приниматься данные для рассчета...';
    } else {
        switch (whatCount) {
            case 'Квадрат-Площадь':
                showElement.textContent = `Площадь квадрата со строной ${a.value} равна ${getSquare(+a.value)}`;
                break;
            case 'Квадрат-Периметр':
                showElement.textContent = `Периметр квадрата со стороной ${a.value} равен ${getPerimeter(+a.value)}`;
                break;
            case 'Прямоугольник-Площадь':
                showElement.textContent = `Площадь прямоугольника со стронами ${a.value} и ${b.value} равна ${getRectSquare(+a.value, +b.value)}`;
                break;
            case 'Прямоугольник-Периметр':
                showElement.textContent = `Периметр прямоугольника со стронами ${a.value} и ${b.value} равен ${getRectPerimeter(+a.value, +b.value)}`;
                break;
            case 'Круг-Площадь':
                showElement.textContent = `Площадь круга с радиусом ${r.value} равна ${getCircleSquare(+r.value)}`;
                break;
            case 'Круг-Длина окружности':
                showElement.textContent = `Длина окружности с радиусом ${r.value} равна ${getCircleLength(+r.value)}`;
                break;
            case 'Треугольник-Площадь':
                showElement.textContent = `Площадь треугольника со сторонами ${a.value}, ${b.value} и ${c.value} равна ${getTriangleSquare(+a.value, +b.value, +c.value)}`;
        }
    }

    isReset = !isReset;

    checkButton();
});