document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const userText = prompt('Введите новый текст для ссылки:');

            if (userText !== null) {
                link.textContent = userText;
                console.log('Текст в ссылке изменен на', userText);
            }
        });
    });
});






