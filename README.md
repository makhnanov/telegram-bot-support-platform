# Yeah

# Task 7

-   Вынеси js в отдельный файл и подключи его.
-   Сделай так чтобы при нажатии на enter поле очищалось и добавлялось
    новое bubble сообщение к остальным вниз.

### Solution

### ToDo / Remark / Review

### Result

![7](https://github.com/makhnanov/telegram-bot-support-platform/blob/main/lessons/7/img.png)
:x:

# Task 6

-   В переписке добавь инпут снизу для ввода текста. Стилизуй его по
    красоте.
-   Научись подключать js и использовать базовые инструменты отладки
    console.log и alert
-   Пока что скрипт с этими командами зашей в index.html в тег
    ```{=html}
    <script>
    ```

### Solution

-   Для добавления "Input" воспользовался статьей
    https://www.sravni.ru/kursy/info/kak-sozdat-chat-dlya-sajta/
-   С инструментами отладки JavaScript ознакомился:
    https://habr.com/ru/articles/540732/ В целом проблем не возникло.

### ToDo / Remark / Review

### Result

![6](https://github.com/makhnanov/telegram-bot-support-platform/blob/main/lessons/6/img.png)
\# :heavy_check_mark:

# Task 5

-   В правом сделай bubbles сообщения.
-   Как в тг. Пользователя слева, твои справа, тож рандом текст. Штучек
    5.
-   Добавить background для блока чата и сообщений

### Solution

-   Для создания bubble сообщения пользовался статьей:
    http://htmlbook.ru/blog/kak-sdelat-slovesnyi-puzyr-na-css3-bez-kartinok
-   Также научился смотреть информацию с сайта используя консоль
    браузера
-   Возникли небольшие проблемы при добавлении пространсва между левыми
    и правыми сообщениями. (К правому сообщению необходимо было
    добавить: align-self: end;)

### ToDo / Remark / Review

### Result

![5](https://github.com/makhnanov/telegram-bot-support-platform/blob/main/lessons/5/img.png)
\# :heavy_check_mark:

# Task 4

-   Стили вынеси в отдельный файл и подключи его в head.
-   Левый блок будут чаты, а правый блок - то что в чате написано.
-   Убирай цвета и создавай внутри левого блока блоки с пользователями
    которые написали что-то нашему боту.
-   В каждом блоке будет фотка сделай ещё какую-нибудь рандомную и
    закруглённую - не большую.
-   Имя отправителя и рандомный текст последнего сообщения, всё пока
    хардкодом - потом оно будет браться с сервера.

### Solution

-   Для выполнения задачи пользовался статейками
    http://htmlbook.ru/css/position
-   https://ru.hexlet.io/qna/html/questions/kak-sdelat-prokrutku-stranitsy-v-html
-   И видео https://www.youtube.com/watch?v=cTNVhD8HkDU

### ToDo / Remark / Review

-   Страница не должна скроллиться.
-   Скроллиться должен только блок с юзерами. И только вертикально.
-   Создай, пожалуйста, отдельный css файл для user\* стилей.

### Result

![4](https://github.com/makhnanov/telegram-bot-support-platform/blob/main/lessons/4/img.png)
\# :heavy_check_mark:

# Task 3

Для стилизации используй css классы. Перемести все стили в
```{=html}
<style>
 ... тут все стили ...
 </style>
```
внутри index.html файла.

Добавь второй блок справа от того блока который уже есть и сделай его
таким же по размеру, но зелёным. Пусть первый занимает 20% от ширины, а
второй 70% и между ними будет расстояние через justify-content

Пока ты не станешь самостолятельным - привыкай, что до тебя будут
докапываться по любой мелочи. За каждый пробел. За стиль. За
использование той или иной функции или библиотеки.

Ты, конечно, можешь стат самостолятельным и в одиночестве. Но как только
в твой, понятный только тебе (и то не всегда), код заглянет кто-нибудь
со стороны, он почувствует мягко сказать ужас. Лучше сразу приучать себя
писать качественный код. Советую прочитать хотя-бы начало книги "Чистый
код" дядюшки Боба. Там примеры про Java. Но подход применим к любому
коду. В python, к примеру, из-за одного лишнего пробела - скрипт не
запускается. HTML, CSS, JS, PHP - не строго типизированные и не строго
относящиеся к стилю кода языки. Они многое прощают.

Сейчас к примеру я бы хотел что-бы научился и всегда использоовал
функцию "Reformat Code". Запомни хоткей. Можешь его переопределить, если
есть конфликт с осью.

Далее я бы хотел чтобы ты научился настраивать эту функцию. К примеру я
сейчас захотел что-бы всё что находилось в тэгах html и body имело
отступы. По умолчанию в WebStorm этой версии - это не делается. Я
захотел это изменить и пошёл искать в настройках это. Мне привычнее
делать так, хоть это и не обязательно, а может быть и вообще не верно.
Ну что поделать, зачастую в любой компании, в которую ты прийдёшь -
будут подобные загоны. Надо подстраиваться. Попробуй найти эти настройки
и сделать так чтобы при "Reformat Code" эта табуляция делалась
автоматически.

Настройки по умолчанию открываются через Ctrl + Alt + S.

Подсказка: Editor -\> Code Style -\> HTML -\> "Do not indent children
of:" -\> В самом начале удалить "html,body," -\> Apply -\> OK

### Solution

-   В выполнении задачи помогла статья и видео:
    https://html5css.ru/html/html_css.php
-   https://www.youtube.com/watch?v=9WBwrARLdpQ
-   https://ru.bem.info/methodology/

### ToDo / Remark / Review

### Result

![3](https://github.com/makhnanov/telegram-bot-support-platform/blob/main/lessons/3/img.png)
\# :heavy_check_mark:

# Task 2

-   Создай пустой блок в body HTML документа
-   Сделай его максимальной шириной и flex
-   Внутрь помести ещё один блок сделай его высотой 100px x 100px с
    красным цветом background'a,
-   и сделай так чтобы он был по центру через justify-content родителя.
-   Почитай про flexbox вёрстку для пониммания.
-   Стили добавляй через inline. Ok Google "inline стили css".
-   https://flexboxfroggy.com/

### Solution

-   Для создания блока воспользовался данной статьей:
    http://htmlbook.ru/html/div
-   Также для ознакомления с Flex помогло видео:
    https://www.youtube.com/watch?v=eVZEwEQg4pg&t=54s
-   https://semakin.dev/2020/05/no_newline_at_end_of_file/

### ToDo / Remark / Review

Пример инлайн стиля: `<div style="color: red;"></div>`

Это уже не инлайн. Дополнительно опиши разницу между этими двумя
вариантами использования стилей. В таком варианте надо будет следующее
задание делать.

``` html
<style>
    div {
        color: red;
    }
</style>
```

Такое ощущение что ты все задания уже прочитал заранее и сразу хочешь
всё сделать)

### Result

![2](https://github.com/makhnanov/telegram-bot-support-platform/blob/main/lessons/2/img.png)
\# :heavy_check_mark:

# Task 1

-   Напиши что такое HTML, CSS, JS.
-   Создай базовый пустой шаблон HTML документа в index.html

### Solution

HTML - это язык разметки, который мы используем для визуального и
смыслового структурирования нашего web контента, например, определяем
параграфы, заголовки, таблицы данных, или вставляем изображения и видео
на страницу. https://skillbox.ru/media/code/chto_takoe_html/

CSS - это язык стилей с помощью которого мы придаём стиль отображения
нашего HTML контента, например придаём цвет фону (background) и шрифту,
придаём контенту многоколоночный вид.
https://gb.ru/posts/chto-takoe-css-obyasnyaem-prostymi-slovami

JavaScript язык программирования, который позволяет вам создать
динамически обновляемый контент, управляет мультимедиа, анимирует
изображения, впрочем, делает всё, что угодно.

https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript

### ToDo / Remark / Review

### Result

![1](https://github.com/makhnanov/telegram-bot-support-platform/blob/main/lessons/1/img.png)
\# :heavy_check_mark:
