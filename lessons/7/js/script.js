// К глобальному объекту документ (document) добавим (.) слушатель событий (addEventListener) загрузки страницы (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function (event) { // Содержимое функции (function(event) { ... }) выполнится когда документ будет загружен
    let submit = document.getElementById("chat-form__submit") // Здесь мы объявляем переменную (let), которая называется (submit) и сразу же присваиваем (=)
    // результат выполнения функции (getElementById) которая вызывается (.) от объекта (document), которая находит по аргументу ("chat-form__submit") div по id
    function addNewBubble() {
        let input = document.getElementById("chat-form__input")
        let inputText = input.value
        let chat = document.getElementsByClassName("chat")[0]
        chat.innerHTML += '<div class="chat-massage chat-massage_support">' + inputText + '</div>'
        input.value = " ";
    }

    submit.addEventListener("click", function (e) {
        addNewBubble();
    })

    let input = document.getElementById("chat-form__input")
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addNewBubble();
        }
    })

});
