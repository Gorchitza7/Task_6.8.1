document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('input[type="text"]');
    const duplicateField = document.getElementById('duplicateField');
    const submitButton = document.querySelector('button[type="submit"]');

    inputField.addEventListener('input', function () {
        duplicateField.textContent = inputField.value;
    });

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвращаем отправку формы (перезагрузку страницы)
        
        const inputValue = inputField.value;
        console.log('Введенный текст:', inputValue);

        // Очищаем поле ввода и текстовый блок
        inputField.value = '';
        duplicateField.textContent = '';
    });
});