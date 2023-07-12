// К глобальному объекту документ (document) добавим (.) слушатель событий (addEventListener) загрузки страницы (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function (event) { // Содержимое функции (function(event) { ... }) выполнится когда документ будет загружен
    let submit = document.getElementById("chat-form__submit") // Здесь мы объявляем переменную (let), которая называется (submit) и сразу же присваиваем (=)
    // результат выполнения функции (getElementById) которая вызывается (.) от объекта (document), которая находит по аргументу ("chat-form__submit") div по id
    function addNewBubbleFromInput() {
        let input = document.getElementById("chat-form__input")
        let inputText = input.value
        let chat = document.getElementsByClassName("chat")[0]
        chat.innerHTML += '<div class="chat-message chat-message_support">' + inputText + '</div>'
        input.value = "";
    }

    submit.addEventListener("click", function (e) {
        addNewBubbleFromInput();
    })

    let input = document.getElementById("chat-form__input")
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addNewBubbleFromInput();
        }
    })
    var userMessages = [
        "How do I take screenshots?",
        "How do I open a folder?",
        "How do I run the command prompt?",
        "How to creat folder?",
        "How to open Task Manager?",
        "How to declare a function in Java Script?",
    ]

    var supportMessages = [
        "To take a screenshot, press Win+Shift+S.",
        "Left-click the folder twice to open it.",
        "To open the command prompt press WIN+R.",
        "Right-click on the desktop, then click Create folder",
        "Press Ctrl+Alt+Del on the keyboard",
        "First comes the keyword function, followed by the function name, then a list of parameters in parentheses separated by commas",
    ]
    function addNewRandomBubble(bubbleText, isUser) {
        console.log("Вывел")
        let chat = document.getElementsByClassName("chat")[0]
        var message = document.createElement("div");
        message.innerHTML += bubbleText
        message.classList.add("chat-message", isUser ? "chat-message_support" : "chat-message_client")
        chat.appendChild(message)
    }
    let allUsers = document.getElementsByClassName("user")
    let allUsersCount = allUsers.length;
    for (let userIndex = 0; userIndex < allUsersCount; userIndex++) {
        allUsers[userIndex].addEventListener("click", function (e) {
            let chat = document.getElementsByClassName("chat")[0]
            while (chat.firstChild) {
                chat.removeChild(chat.firstChild);
            }
            for (let randomBubble = 0; randomBubble < Math.random() * 7; randomBubble++) {
                var rand = Math.floor(Math.random() * userMessages.length,supportMessages.length);
                addNewRandomBubble(userMessages[rand], false)
                addNewRandomBubble(supportMessages[rand], true)
                
            }
        })
    }
});