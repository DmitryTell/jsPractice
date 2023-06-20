'use strict';

const showElement = document.querySelector('#show');
const keyboardElement = document.querySelector('#keyboard');

let isRus = false;
let isShift = false;
let isCaps = false;
let firstRow = [
    {
        textEn: '`',
        textEnShift: '~',
        textRu: 'ё',
        textRuShift: 'Ё',
        xSize: '1',
        id: null
    },
    {
        textEn: '1',
        textEnShift: '!',
        textRu: '1',
        textRuShift: '!',
        xSize: '1',
        id: null
    },
    {
        textEn: '2',
        textEnShift: '@',
        textRu: '2',
        textRuShift: '"',
        xSize: '1',
        id: null
    },
    {
        textEn: '3',
        textEnShift: '#',
        textRu: '3',
        textRuShift: '№',
        xSize: '1',
        id: null
    },
    {
        textEn: '4',
        textEnShift: '$',
        textRu: '4',
        textRuShift: ';',
        xSize: '1',
        id: null
    },
    {
        textEn: '5',
        textEnShift: '%',
        textRu: '5',
        textRuShift: '%',
        xSize: '1',
        id: null
    },
    {
        textEn: '6',
        textEnShift: '^',
        textRu: '6',
        textRuShift: ':',
        xSize: '1',
        id: null
    },
    {
        textEn: '7',
        textEnShift: '&',
        textRu: '7',
        textRuShift: '?',
        xSize: '1',
        id: null
    },
    {
        textEn: '8',
        textEnShift: '*',
        textRu: '8',
        textRuShift: '*',
        xSize: '1',
        id: null
    },
    {
        textEn: '9',
        textEnShift: '(',
        textRu: '9',
        textRuShift: '(',
        xSize: '1',
        id: null
    },
    {
        textEn: '0',
        textEnShift: ')',
        textRu: '0',
        textRuShift: ')',
        xSize: '1',
        id: null
    },
    {
        textEn: '-',
        textEnShift: '_',
        textRu: '-',
        textRuShift: '_',
        xSize: '1',
        id: null
    },
    {
        textEn: '=',
        textEnShift: '+',
        textRu: '=',
        textRuShift: '+',
        xSize: '1',
        id: null
    },
    {
        textEn: 'Backspace',
        textEnShift: 'Backspace',
        textRu: 'Backspace',
        textRuShift: 'Backspace',
        xSize: '3',
        id: 'backspace'
    }
];
let secondRow = [
    {
        textEn: 'Tab',
        textEnShift: 'Tab',
        textRu: 'Tab',
        textRuShift: 'Tab',
        xSize: '2',
        id: 'tab'
    },
    {
        textEn: 'q',
        textEnShift: 'Q',
        textRu: 'й',
        textRuShift: 'Й',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'w',
        textEnShift: 'W',
        textRu: 'ц',
        textRuShift: 'Ц',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'e',
        textEnShift: 'E',
        textRu: 'у',
        textRuShift: 'У',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'r',
        textEnShift: 'R',
        textRu: 'к',
        textRuShift: 'К',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 't',
        textEnShift: 'T',
        textRu: 'е',
        textRuShift: 'Е',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'y',
        textEnShift: 'Y',
        textRu: 'н',
        textRuShift: 'Н',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'u',
        textEnShift: 'U',
        textRu: 'г',
        textRuShift: 'Г',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'i',
        textEnShift: 'I',
        textRu: 'ш',
        textRuShift: 'Ш',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'o',
        textEnShift: 'O',
        textRu: 'щ',
        textRuShift: 'Щ',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'p',
        textEnShift: 'P',
        textRu: 'з',
        textRuShift: 'З',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: '[',
        textEnShift: '{',
        textRu: 'х',
        textRuShift: 'Х',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: ']',
        textEnShift: '}',
        textRu: 'ъ',
        textRuShift: 'Ъ',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: '\\',
        textEnShift: '|',
        textRu: '\\',
        textRuShift: '/',
        xSize: '2',
        id: null
    }
];
let thirdRow = [
    {
        textEn: 'Caps Lock',
        textEnShift: 'Caps Lock',
        textRu: 'Caps Lock',
        textRuShift: 'Caps Lock',
        xSize: '2',
        id: 'caps-lock'
    },
    {
        textEn: 'a',
        textEnShift: 'A',
        textRu: 'ф',
        textRuShift: 'Ф',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 's',
        textEnShift: 'S',
        textRu: 'ы',
        textRuShift: 'Ы',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'd',
        textEnShift: 'D',
        textRu: 'в',
        textRuShift: 'В',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'f',
        textEnShift: 'F',
        textRu: 'а',
        textRuShift: 'А',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'g',
        textEnShift: 'G',
        textRu: 'п',
        textRuShift: 'П',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'h',
        textEnShift: 'H',
        textRu: 'р',
        textRuShift: 'Р',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'j',
        textEnShift: 'J',
        textRu: 'о',
        textRuShift: 'О',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'k',
        textEnShift: 'K',
        textRu: 'л',
        textRuShift: 'Л',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'l',
        textEnShift: 'L',
        textRu: 'д',
        textRuShift: 'Д',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: ';',
        textEnShift: ':',
        textRu: 'ж',
        textRuShift: 'Ж',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: "'",
        textEnShift: '"',
        textRu: 'э',
        textRuShift: 'Э',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'Enter',
        textEnShift: 'Enter',
        textRu: 'Enter',
        textRuShift: 'Enter',
        xSize: '3',
        id: 'enter'
    }
];
let fourthRow = [
    {
        textEn: 'Shift',
        textEnShift: 'Shift',
        textRu: 'Shift',
        textRuShift: 'Shift',
        xSize: '3',
        id: 'shift'
    },
    {
        textEn: 'z',
        textEnShift: 'Z',
        textRu: 'я',
        textRuShift: 'Я',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'x',
        textEnShift: 'X',
        textRu: 'ч',
        textRuShift: 'Ч',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'c',
        textEnShift: 'C',
        textRu: 'с',
        textRuShift: 'С',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'v',
        textEnShift: 'V',
        textRu: 'м',
        textRuShift: 'М',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'b',
        textEnShift: 'B',
        textRu: 'и',
        textRuShift: 'И',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'n',
        textEnShift: 'N',
        textRu: 'т',
        textRuShift: 'Т',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: 'm',
        textEnShift: 'M',
        textRu: 'ь',
        textRuShift: 'Ь',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: ',',
        textEnShift: '<',
        textRu: 'б',
        textRuShift: 'Б',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: '.',
        textEnShift: '>',
        textRu: 'ю',
        textRuShift: 'Ю',
        xSize: '1',
        id: null,
        isLetter: true
    },
    {
        textEn: '/',
        textEnShift: '?',
        textRu: '.',
        textRuShift: ',',
        xSize: '1',
        id: null
    },
    {
        textEn: 'Rus',
        textEnShift: 'Rus',
        textRu: 'Eng',
        textRuShift: 'Eng',
        xSize: '3',
        id: 'switch-lang'
    }
];
let fifthRow = [
    {
        textEn: ' ',
        textEnShift: ' ',
        textRu: ' ',
        textRuShift: ' ',
        xSize: '5',
        id: null
    }
];

const renderKeyboard = () => {
    const firstRowHtml = firstRow.map(key => {
        return `
            <button class="button x${key.xSize}-button ${
                key.id ? '' : '-sample-key'
            } ${
                key.isLetter ? 'letter' : ''
            }" ${key.id ? `id="${key.id}"` : ''}>${
                isRus ? `${
                    isShift ? key.textRuShift : key.textRu
                }` : `${
                    isShift ? key.textEnShift : key.textEn
                }`
            }</button>`;
    }).join('');
    const secondRowHtml = secondRow.map(key => {
        return `
            <button class="button x${key.xSize}-button ${
                key.id ? '' : '-sample-key'
            } ${
                key.isLetter ? 'letter' : ''
            }" ${key.id ? `id="${key.id}"` : ''}>${
                isRus ? `${
                    isShift ? key.textRuShift : key.textRu
                }` : `${
                    isShift ? key.textEnShift : key.textEn
                }`
            }</button>`;
    }).join('');
    const thirdRowHtml = thirdRow.map(key => {
        return `
            <button class="button x${key.xSize}-button ${
                key.id ? '' : '-sample-key'
            } ${
                key.isLetter ? 'letter' : ''
            }" ${key.id ? `id="${key.id}"` : ''}>${
                isRus ? `${
                    isShift ? key.textRuShift : key.textRu
                }` : `${
                    isShift ? key.textEnShift : key.textEn
                }`
            }</button>`;
    }).join('');
    const fourthRowHtml = fourthRow.map(key => {
        return `
            <button class="button x${key.xSize}-button ${
                key.id ? '' : '-sample-key'
            } ${
                key.isLetter ? 'letter' : ''
            }" ${key.id ? `id="${key.id}"` : ''}>${
                isRus ? `${
                    isShift ? key.textRuShift : key.textRu
                }` : `${
                    isShift ? key.textEnShift : key.textEn
                }`
            }</button>`;
    }).join('');
    const fifthRowHtml = fifthRow.map(key => {
        return `
            <button class="button x${key.xSize}-button ${
                key.id ? '' : '-sample-key'
            } ${
                key.isLetter ? 'letter' : ''
            }" ${key.id ? `id="${key.id}"` : ''}>${
                isRus ? `${
                    isShift ? key.textRuShift : key.textRu
                }` : `${
                    isShift ? key.textEnShift : key.textEn
                }`
            }</button>`;
    }).join('');

    keyboardElement.innerHTML = `
        <div class="keys-row">
            ${firstRowHtml}
        </div>
        <div class="keys-row">
            ${secondRowHtml}
        </div>
        <div class="keys-row">
            ${thirdRowHtml}
        </div>
        <div class="keys-row">
            ${fourthRowHtml}
        </div>
        <div class="keys-row last-row">
            ${fifthRowHtml}
        </div>`;

    initFunctions();
}

const initFunctions = () => {
    [...document.querySelectorAll('.-sample-key')].forEach(key => {
        key.addEventListener('click', () => {
            showElement.value += key.textContent;
        });
    });

    document.querySelector('#backspace')
    .addEventListener('click', () => {
        let arr = showElement.value.split('');

        arr.pop();

        showElement.value = arr.join('');
    });

    document.querySelector('#tab')
    .addEventListener('click', () => {
        showElement.value += '\t';
    });

    document.querySelector('#enter')
    .addEventListener('click', () => {
        showElement.value += '\n';
    });

    document.querySelector('#shift')
    .addEventListener('click', () => {
        isShift = !isShift;

        renderKeyboard();
    });

    document.querySelector('#switch-lang')
    .addEventListener('click', () => {
        isRus = !isRus;

        renderKeyboard();
    });

    document.querySelector('#caps-lock')
    .addEventListener('click', () => {
        const letterElements = document.querySelectorAll('.letter');

        if (isCaps) {
            renderKeyboard();
        } else {
            [...letterElements].map(letter => {
                letter.textContent = letter.textContent.toUpperCase();
            });
        }

        isCaps = !isCaps;
    });
}

renderKeyboard();