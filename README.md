# Games store

#### Link to [GameMuffin](gamestore-js2a.onrender.com).

<br>
<div style="text-align:center">
  <img src="https://sun9-west.userapi.com/sun9-52/s/v1/ig2/MlL_Skv_TFxnB6_lhm-xKouaAjQdsc6wlwAuLWyVjDPvSm7SNNaCvNCEoktfjRwfHT8ySJ2CB5lqfrCpKiNO72b9.jpg?size=1906x952&quality=96&type=album" width="1000"/>
  <img src="https://sun9-north.userapi.com/sun9-85/s/v1/ig2/4pngy4ylrZ_kQVZNNd6HOcJWPaB0UCP5Qg1RQDmLU_uDeXK6XWMPDAI62rD6i5JklAJd_ENWQzsc-qzRpACr8Eqc.jpg?size=1910x956&quality=96&type=album" width="1000"/>
</div>
<br>

## Website functionality

On this site you can **"buy"**, **write reviews**, **rate** games. After **"purchasing"**, the games added to the shopping cart are sent to the mail specified during registration. The site also implements **search** and **filter** for games.


#### Main pages of the site
- Main page at `/`
- Catalog of all games `/categories`
- A page for viewing with a description of the game at `/games/[game_title]`
- User account at `/user/account`

Further on this site the possibility of **registration** with the subsequent **login** on the site is implemented.

<div style="text-align:center">
  <img src="https://sun9-east.userapi.com/sun9-17/s/v1/ig2/ob9Kud_j5Xt5gGmfA4vHA9t5kvu7slrSreJfGdgHKtdZv19VcNo_jW61NR6g3sYLMkmMDKmgkvJ9ibderGGWoZsr.jpg?size=1915x957&quality=96&type=album" width="1000"/>
</div>
<br>
<br>

The site implements **adding to cart** games with subsequent "purchase" and sending game keys to the email.

<div style="text-align:center">
  <img src="https://sun9-east.userapi.com/sun9-35/s/v1/ig2/6SptTvA8ZMAdMesV0yMSRd8E_1V13rtIJZGYJ3M-7szIkNM-BitxudDu6jUc2Oo3VvXTNT-IEJ5XwAiUjqL2JVgw.jpg?size=1914x956&quality=96&type=album" width="550"/>
  <img src="https://sun9-east.userapi.com/sun9-44/s/v1/ig2/iEmN7Z7s7_j_7JXDo-SVRVdB1trXfWOfwjaMPaMRa5Naj29CCRDBbKRFC9eqwZJCS14UFt-wXWPy4VAe7Zhzx1L3.jpg?size=1227x485&quality=96&type=album" width="550"/>
</div>
<br>
<br>

**Filter** and **search** games.

<div style="text-align:center">
  <img src="https://sun9-west.userapi.com/sun9-13/s/v1/ig2/riADSf_yz14omuJ2QUqcL_0XvMldNt4G2pzSPXaA_me44FX8JPNarXHbfjuzi5Y5Fchn4S7MhDxf6AkXeR5X6ruF.jpg?size=1908x952&quality=96&type=album" width="550"/>
  <img src="https://sun9-east.userapi.com/sun9-19/s/v1/ig2/4wtFHxEXWfwjh8dwsA_Lrz7TClXW0BYb1mZS9aF3k515OppeIX51E4GTAGsHW02xoMhkNlTH0twO7bLQLuq2vTcB.jpg?size=1910x948&quality=96&type=album" width="550"/>
</div>
<br>
<br>

## Technologies used in the development of the site

#### The following frameworks and technologies were used for the frontend part
- HTML/CSS/JS
- Vue (Vite, Vuex, Router)
- Tailwind
- Axios


#### The following frameworks and technologies were used for the backend part
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM

Registration implemented via **JWT**

**The site is responsive and is available for comfortable viewing on devices with different screen sizes. There is also a site theme change.**

<div style="text-align:center">
  <img src="https://sun9-west.userapi.com/sun9-71/s/v1/ig2/_s47mRWtxJvlMF1UA7kzQueDMDEyUGR3UcJILPBAixCLeI3DHrpJcDEdEaty466z8kBotyQAhmls7jdgv7e61KJf.jpg?size=435x867&quality=96&type=album" width="400"/>
  <img src="https://sun9-north.userapi.com/sun9-81/s/v1/ig2/puXkHb-stWWX-fjxxfBXkSX0Wkc4q23FkqTtvF5PV2OqqJcGGWp85rgZiLJlJOn5sjrKlJWlemmsroAfGnrrc9D5.jpg?size=847x900&quality=96&type=album" width="550"/>
  <img src="https://sun9-west.userapi.com/sun9-46/s/v1/ig2/67n2YYLwNbMEPlcdCGx0MbcNv9Wq4W7JNLtXtAI5Dt87j7GvJSywY4ZMI5gwoWw4AX85JTjoiqy0PMuSSX3btuCE.jpg?size=1909x958&quality=96&type=album" width="1000"/>
</div>
<br>
<br>

## Run application

Clone the repository with `git clone` to run the application.

To download all packages and modules, use the `npm init` command in the `/server` and `/client` folders.

To start the client and the server separately, use the `npm start` command in the folders of the same name, or start only the server, with the client as static files after the `npm run build` command in the `client` folder and `npm start` in the `server` folder.

You will also need to connect to the database and the following environment variables:

- PORT
- For CORS work - VUE_API_URL
- Database connection - DB_HOST DB_PORT DB_DIALECT DB_NAME DB_USER DB_PASSWORD
- For JWT work - SECRET_REFRESH SECRET_ACCESS
- For RAWG API - RAWG_API_KEY
- For Nodemailer to work - EMAIL_HOST EMAIL_PORT EMAIL_USER EMAIL_PAS
