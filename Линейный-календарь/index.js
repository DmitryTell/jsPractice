'use strict';

const monthYearElement = document.querySelector('#month-year');
const daysElement = document.querySelector('#days');
const nextElement = document.querySelector('#next');
const prevElement = document.querySelector('#prev');

let year = (new Date).getFullYear();
let month = (new Date).getMonth();
let months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];
let days = [];

const getDays = (year, month) => {
    let result = [];

    for (let i = new Date(year, month, 1).getDate(); i <= new Date(year, month + 1, 0).getDate(); i++) {
        result.push(i);
    }

    return result;
}

const renderCalendar = () => {
    days = getDays(year, month);

    const monthYearHtml = `
        <p>${months[month]}</p>
        <p>${year}</p>`;
    const daysHtml = days.map(day => {
        return `
            <li class="${
                day === (new Date).getDate() ? '-this-day' : ''
            }">${day}</li>`;
    }).join('');

    monthYearElement.innerHTML = monthYearHtml;
    daysElement.innerHTML = daysHtml;
}

renderCalendar();

nextElement.addEventListener('click', () => {
    if (month === 11) {
        year += 1;
        month = 0;

        renderCalendar();
    } else {
        month += 1;

        renderCalendar();
    }
});

prevElement.addEventListener('click', () => {
    if (month === 0) {
        year -= 1;
        month = 11;

        renderCalendar();
    } else {
        month -= 1;

        renderCalendar();
    }
});