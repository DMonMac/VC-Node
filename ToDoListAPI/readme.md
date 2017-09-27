## **[![Node]("Node")](https://nodejs.org/en/) VIVIXX CHALLENGES: ToDoListAPI**

### THE CHALLENGE
> Build Node.js RESTful APIs as demonstrated in this [tutorial](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)

### RUN API
1. Install [Node.js, npm](https://docs.npmjs.com/getting-started/installing-node), and [MongoDB](https://docs.mongodb.com/manual/installation/)
2. Copy the 'ToDoListAPI' folder to your computer.
3. In your terminal, set your directory to inside that folder.
4. Type `sudo service mongod start`
5. Type `npm start`.
6. Open http://localhost:3000/tasks in your browser.

### API
Basically, this deals with how to handle data requests and responses with a JSON data format, using the Representational State Transfer (REST) approach. That means HTTP requests will be used to perform four operations termed as CRUD (C: create, R: read, U: update, and D: delete). Create and/or update is used to post data, get for reading/listing data, and delete to remove data.

### POSTMAN
For this API, you'll need [Postman](https://www.getpostman.com/) to test it out. Here's the [link](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd) for the tutorial again if you need it. It also gives details instructions on how to use Postman, but I'll just write down the methods I've tried here:

- #### ROUTES
    Do take time to look at 'ToDoListAPI/api/routes/todoListRoutes.js'. There are 2 routes set there, along with the methods they can do. For '/tasks', GET and POST functions are available, and for '/tasks/:taskId', we have GET, PUT, and delete
.
- #### GET
    Once youve got Postman fired up, look for the tab that says 'GET'. To the right of that tab paste the url of the API (which in this case is http://localhost:3000/tasks). After that, click the 'Send' button to the right of the URL field. If you've been following the [tutorial](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd), it should initially return a blank array. If you used the one here, there should be at least one data entry showing up.

- #### POST
    If you look at the keys you saw when you tested GET, they're similar to the ones in the 'ToDoListAPI/api/models/todoListModel.js' file. 
