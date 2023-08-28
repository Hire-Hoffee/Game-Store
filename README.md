# Games store

#### Link to [GameMuffin](gamestore-js2a.onrender.com).

#### Figma site design - [link](https://www.figma.com/file/h8FgSc2vhMSTlUnSUqAafQ/Game-store?node-id=0%3A1).

<br>
<div style="text-align:center">
  <img src="https://i.imgur.com/aTb2t3M.jpg" width="1000"/>
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
  <img src="https://i.imgur.com/13N8zjw.jpg" width="1000"/>
</div>
<br>
<br>

The site implements **adding to cart** games with subsequent "purchase" and sending game keys to the email.

<div style="text-align:center">
  <img src="https://i.imgur.com/MQV6GzU.jpg" width="550"/>
  <img src="https://i.imgur.com/zOSbmr4.jpg" width="550"/>
</div>
<br>
<br>

**Filter** and **search** games.

<div style="text-align:center">
  <img src="https://i.imgur.com/SbrPCHt.jpg" width="550"/>
  <img src="https://i.imgur.com/Ec8JTys.jpg" width="550"/>
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
  <img src="https://i.imgur.com/7YsO1pp.jpg" width="400"/>
  <img src="https://i.imgur.com/x54Ta0X.jpg" width="1000"/>
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
