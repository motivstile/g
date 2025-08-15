let text = document.createElement('p');
let info = prompt('Введите свой текст');
text.textContent = info;

let textColor = prompt('Введите цвет текста');
text.style.color = textColor;

let bgColor = prompt('Введите цвет фона');
text.style.backgroundColor = bgColor;

document.body.appendChild(text);