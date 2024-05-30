# Game Muffin: online video game store

Game Muffin is a web application representing an online video game store. The project is built on a client-server architecture, where the frontend is responsible for displaying information and interacting with the user, and the backend provides API for accessing data and processing business logic.

#### Link to [GameMuffin](http://petgamemuffin.freemyip.com).

#### Website design in Figma - [link](https://www.figma.com/file/h8FgSc2vhMSTlUnSUqAafQ/Game-store?node-id=0%3A1).

<br>
<div style="text-align:center">
  <img src="https://i.imgur.com/aTb2t3M.jpg" width="1000"/>
</div>
<br>

## Site functionality

On this site you can **"buy ”**, **write reviews**, **evaluate** games. After **"buying ”** the games added to the cart are sent to the e-mail specified during registration. Also on the site implemented **search** and **filter** on games.

<div style="text-align:center">
  <img src="https://i.imgur.com/13N8zjw.jpg" width="550"/>
  <img src="https://i.imgur.com/MQV6GzU.jpg" width="550"/>
  <img src="https://i.imgur.com/zOSbmr4.jpg" width="550"/>
</div>
<br>
<br>

### Technology:

**Frontend:**
Vue.js, Vue Router, Tailwind CSS, Swiper.js, Axios

**Backend:**
Node.js, Express.js, Sequelize, JWT, Nodemailer, bcrypt, dotenv, axios

### Principle of operation:

1. **Loading the frontend part**: The user opens the application in a browser. The frontend created with Vue.js is loaded and displays the start page.
2. **Routing**: Vue Router handles the user's transitions between sections of the application by dynamically loading and displaying the appropriate Vue components.
3. **Backend Interaction**: To retrieve and update data, the frontend sends HTTP requests to the backend API using Axios.
4. **Backend request processing**: Express.js handles incoming requests by identifying the appropriate controller and calling its method.
5. **Business logic**: The appropriate service is called in the controller, which contains the business logic needed to process the request.
6. **Database Interaction**: The service interacts with the PostgreSQL database via Sequelize, performing the necessary operations: reading, writing, updating or deleting data.
7. **Backend response**: The backend sends a response to the frontend in JSON format containing data or error information.
8. **Frontend Update**: Frontend processes the received response by updating the application state using Vuex, changing the component mapping and displaying the current information to the user.
9. **Authentication**: For secure actions such as buying games or leaving reviews, frontend uses JWT to authenticate the user. The backend verifies the token by checking the user's access rights.
10. **Email Notifications**: Backend uses Nodemailer to send email notifications to users, such as to confirm registration or send order information.

**Additional Features:**

- **External API**: Backend utilizes RAWG's external game API to retrieve additional game information such as Metacritic ratings and screenshots.
- **Filtering and Search**: Frontend provides the ability to filter games by various parameters: price, genre, platform. Backend processes queries with filters, returning relevant results.
- **Pagination**: Frontend implements pagination to display large lists of games, breaking them into pages. Backend handles page-specific data requests.
- **Error Handling**: Backend provides informative error messages in JSON format, which frontend displays to the user.

**The site is adaptive and is available for comfortable viewing on devices with different screen sizes. There is also a change of the site theme.**

<div style="text-align:center">
  <img src="https://i.imgur.com/7YsO1pp.jpg" width="400"/>
  <img src="https://i.imgur.com/x54Ta0X.jpg" width="1000"/>
</div>
<br>
<br>

## Run the application

- clone the repository using `git clone`.
- install `npm init` dependencies in the `/server` and `/client` folders.
- To start the client and server separately use the `npm start` command in the folders of the same name, or start only the server, with the client as static files after the `npm run build` command in the `client` folder and `npm start` in the ``server` folder.

You will also need to connect to the database and the following environment variables:

- PORT
- To run CORS - VUE_API_URL
- Connection to the database - DB_HOST DB_PORT DB_DIALECT DB_NAME DB_USER DB_PASSWORD
- For JWT operation - SECRET_REFRESH SECRET_ACCESS
- For RAWG API operation - RAWG_API_KEY
- For Nodemailer operation - EMAIL_HOST EMAIL_PORT EMAIL_USER EMAIL_PAS
