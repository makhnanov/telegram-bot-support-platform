![11](https://github.com/makhnanov/telegram-bot-support-platform/blob/main/lessons/11/img.png)

# Task 11
Надо:
service:php:
- Заменить на php-fpm последний (подзадача рассказать про fpm)
- Закинуть composer в контейнер (подзадача про composer)
- Подкинуть volume (хост: backend \ контейнер: /var/www/(название проекта)/backend)
- working_dir
- Поставить последний laravel через composer

service:nginx:
- Заменить на последний
- Посмотреть что он работает (открыть страницу по умолчанию в браузере)
- Настроить конфиг, который будет подключаться к fpm контейнеру и отображать наш сайт- Для laravel

service:node:
- Заменить на последний
- Поднять последний vuejs

# Solution
- 

# ToDo / Remark / Review
