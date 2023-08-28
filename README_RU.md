# Магазин игр

#### Ссылка на сайт [GameMuffin](gamestore-js2a.onrender.com).

#### Дизайн сайта в Figma - [ссылка](https://www.figma.com/file/h8FgSc2vhMSTlUnSUqAafQ/Game-store?node-id=0%3A1).

<br>
<div style="text-align:center">
  <img src="https://i.imgur.com/aTb2t3M.jpg" width="1000"/>
</div>
<br>

## Функционал сайта

На данном сайте вы можете **"покупать"**, **писать отзывы**, **оценивать** игры. После **"покупки"**, добавленные в корзину игры отправляются на почту, указанную при регистрации. Так же на сайте реализован **поиск** и **фильтр** по играм.

#### Основные страницы сайта

- Главная страница по адресу `/`
- Каталог всех игр `/categories`
- Страница для просмотра с описанием игры по адресу `/games/[game_title]`
- Аккаунт пользователя по адресу `/user/account`

Далее на этом сайте реализована возможность **регистрации** c последующим **логином** на сайт.

<div style="text-align:center">
  <img src="https://i.imgur.com/13N8zjw.jpg" width="1000"/>
</div>
<br>
<br>

На сайте реализовано **добавление в корзину** игр с последующей "покупкой" и отправкой игровых ключей на почту.

<div style="text-align:center">
  <img src="https://i.imgur.com/MQV6GzU.jpg" width="550"/>
  <img src="https://i.imgur.com/zOSbmr4.jpg" width="550"/>
</div>
<br>
<br>

**Фильтр** и **поиск** игр.

<div style="text-align:center">
  <img src="https://i.imgur.com/SbrPCHt.jpg" width="550"/>
  <img src="https://i.imgur.com/Ec8JTys.jpg" width="550"/>
</div>
<br>
<br>

## Технологии использованные при разработке сайта

#### Для frontend части были использованы следующие фреймворки и технологии

- HTML/CSS/JS
- Vue (Vite, Vuex, Router)
- Tailwind
- Axios

#### Для backend части были использованы следующие фреймворки и технологии

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM

Регистрация реализована посредством **JWT**

**Сайт является адаптивным и доступен для комфортного просмотра на устройствах с разными размерами экранов. Также присутствует смена темы сайта.**

<div style="text-align:center">
  <img src="https://i.imgur.com/7YsO1pp.jpg" width="400"/>
  <img src="https://i.imgur.com/x54Ta0X.jpg" width="1000"/>
</div>
<br>
<br>

## Запуск приложения

Для того чтобы запустить приложение клонируйте репозиторий при помощи `git clone`.

Для загрузки всех пакетов и модулей используйте команду `npm init` в папках `/server` и `/client`.

Для запуска клиента и сервера отдельно используется команда `npm start` в одноименных папках, либо запуск только сервера, с клиентом в виде статических файлов после команды `npm run build` в папке `client` и `npm start` в папке `server`.

Также вам понадобится подключится к БД и следующие переменные окружения:

- PORT
- Для работы CORS - VUE_API_URL
- Подключение к БД - DB_HOST DB_PORT DB_DIALECT DB_NAME DB_USER DB_PASSWORD
- Для работы JWT - SECRET_REFRESH SECRET_ACCESS
- Для работы RAWG API - RAWG_API_KEY
- Для работы Nodemailer - EMAIL_HOST EMAIL_PORT EMAIL_USER EMAIL_PAS
