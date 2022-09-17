# Магазин игр

#### Ссылка на сайт [GameMuffin](gamestore-js2a.onrender.com).

<br>
<div style="text-align:center">
  <img src="https://sun9-west.userapi.com/sun9-52/s/v1/ig2/MlL_Skv_TFxnB6_lhm-xKouaAjQdsc6wlwAuLWyVjDPvSm7SNNaCvNCEoktfjRwfHT8ySJ2CB5lqfrCpKiNO72b9.jpg?size=1906x952&quality=96&type=album" width="1000"/>
  <img src="https://sun9-north.userapi.com/sun9-85/s/v1/ig2/4pngy4ylrZ_kQVZNNd6HOcJWPaB0UCP5Qg1RQDmLU_uDeXK6XWMPDAI62rD6i5JklAJd_ENWQzsc-qzRpACr8Eqc.jpg?size=1910x956&quality=96&type=album" width="1000"/>
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
  <img src="https://sun9-east.userapi.com/sun9-17/s/v1/ig2/ob9Kud_j5Xt5gGmfA4vHA9t5kvu7slrSreJfGdgHKtdZv19VcNo_jW61NR6g3sYLMkmMDKmgkvJ9ibderGGWoZsr.jpg?size=1915x957&quality=96&type=album" width="1000"/>
</div>
<br>
<br>

На сайте реализовано **добавление в корзину** игр с последующей "покупкой" и отправкой игровых ключей на почту.

<div style="text-align:center">
  <img src="https://sun9-east.userapi.com/sun9-35/s/v1/ig2/6SptTvA8ZMAdMesV0yMSRd8E_1V13rtIJZGYJ3M-7szIkNM-BitxudDu6jUc2Oo3VvXTNT-IEJ5XwAiUjqL2JVgw.jpg?size=1914x956&quality=96&type=album" width="550"/>
  <img src="https://sun9-east.userapi.com/sun9-44/s/v1/ig2/iEmN7Z7s7_j_7JXDo-SVRVdB1trXfWOfwjaMPaMRa5Naj29CCRDBbKRFC9eqwZJCS14UFt-wXWPy4VAe7Zhzx1L3.jpg?size=1227x485&quality=96&type=album" width="550"/>
</div>
<br>
<br>

**Фильтр** и **поиск** игр.

<div style="text-align:center">
  <img src="https://sun9-west.userapi.com/sun9-13/s/v1/ig2/riADSf_yz14omuJ2QUqcL_0XvMldNt4G2pzSPXaA_me44FX8JPNarXHbfjuzi5Y5Fchn4S7MhDxf6AkXeR5X6ruF.jpg?size=1908x952&quality=96&type=album" width="550"/>
  <img src="https://sun9-east.userapi.com/sun9-19/s/v1/ig2/4wtFHxEXWfwjh8dwsA_Lrz7TClXW0BYb1mZS9aF3k515OppeIX51E4GTAGsHW02xoMhkNlTH0twO7bLQLuq2vTcB.jpg?size=1910x948&quality=96&type=album" width="550"/>
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
  <img src="https://sun9-west.userapi.com/sun9-71/s/v1/ig2/_s47mRWtxJvlMF1UA7kzQueDMDEyUGR3UcJILPBAixCLeI3DHrpJcDEdEaty466z8kBotyQAhmls7jdgv7e61KJf.jpg?size=435x867&quality=96&type=album" width="400"/>
  <img src="https://sun9-north.userapi.com/sun9-81/s/v1/ig2/puXkHb-stWWX-fjxxfBXkSX0Wkc4q23FkqTtvF5PV2OqqJcGGWp85rgZiLJlJOn5sjrKlJWlemmsroAfGnrrc9D5.jpg?size=847x900&quality=96&type=album" width="550"/>
  <img src="https://sun9-west.userapi.com/sun9-46/s/v1/ig2/67n2YYLwNbMEPlcdCGx0MbcNv9Wq4W7JNLtXtAI5Dt87j7GvJSywY4ZMI5gwoWw4AX85JTjoiqy0PMuSSX3btuCE.jpg?size=1909x958&quality=96&type=album" width="1000"/>
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