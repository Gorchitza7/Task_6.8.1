const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const alertElement = document.querySelector('#alert');

alertElement.addEventListener('click', () => {
    alert('Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK');
})

const promptElement = document.querySelector('#prompt');

promptElement.addEventListener('click', () => {
    alert('Используется для ввода информации');
})