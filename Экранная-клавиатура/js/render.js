const renderKeyboard = (element, arr1, arr2, arr3, arr4, arr5) => {
    element.innerHTML = arr1.map(el => {
        return `<button class="key ${el.isSpecial ? '-special -3x' : '-sample'}" 
        id="${el.isSpecial ? el.id : ''}">${el.name}</button>`;
    }).join('');
}