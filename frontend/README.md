# Nagwa Company Javascript Task
# Practicing Quiz App

## Getting Started

To get started, clone this repo and run `npm i` in your terminal at the project root & and in frontend directory

## project tools and frameworks used
    this app has been done using **JavaScript** & **NodeJS** & **ExpressJS** & **ReactJS**
### tools & Frameworks for Backend
  - [NodeJS](https://nodejs.org/en/) - an asynchronous event-driven JavaScript runtime
  - [Express](https://expressjs.com/) - back end web application framework for Node.js.
  - [Cors](https://github.com/expressjs/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
  - [dotenv](https://github.com/motdotla/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
  - [express-async-handler](https://github.com/Abazhenov/express-async-handler) - Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
  - [concurrently](https://github.com/open-cli-tools/concurrently) - Run multiple commands concurrently.to run client and server together in one command
  - [nodemon](https://nodemon.io) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
  - [colors](https://github.com/Marak/colors.js) - get color and style in your node.js console 
### tools & Frameworks for Frontend
  - [React](https://reactjs.org) - React is a free and open-source front-end JavaScript library 
  - [React-Router-Dom](https://reactrouter.com/docs/en/v6) - React Router is a fully-featured client and server-side routing library for React
  - [axios](https://axios-http.com) - Axios is a promise-based HTTP Client for node.js and the browser. 
  - [Material UI](https://mui.com) - Material-UI is simply a library that allows us to import and use different components to create a user interface in our React applications.
  - [React-Progress-bar](https://github.com/KaterinaLupacheva/react-progress-bar) - a Progress Bar React Component


## Instructions

  To run the site you need to run it on your localhost server by downloading node.js from [here](https://nodejs.org/en/) and you need to write on terminal the following codes:


## installation and running


1. Clone the project `git clone https://github.com/MaSMas0/Words-Quiz-System.git`.
2. to install Backend dependencies go to the root project folder and write `npm i`(https://docs.npmjs.com/downloading-and-installing-packages-locally).
3. to install Frontend dependencies change directory `cd frontend` and then write`npm i`(https://docs.npmjs.com/downloading-and-installing-packages-locally).
4. make a file .env and you can copy the following env variables

```env
NODE_ENV = production
PORT = 3001
```

10.   **to start the server running on port `3001`.**   `npm run start`  while being in the project root directory

                                    | **Server Port** |
                                    |      :----:     |
                                    |       3001      |

                                    
10.   **to start the client running on port `3000`.**   `npm run start` while being in the frontend directory

                |  **Client Port**  |
                |      :----:       |
                |       3000        |


10.   **to start the server + the client running on port `3001` & on port `3000`.**   `npm run dev` while being in the project root directory


                |  **Client Port**  | **Server Port** |
                |      :----:       |      :----:     |
                |       3000        |       3001      |



## APIs EndPoints

✅ GET [/words]

✅ POST [/rank]

## Screens
✅ Home Screen [/]

✅ Practice Screen [/practice]

✅ Rank Screen [/rank]


**Please note that the version of dependencies is mentioned in package.json**

## How to use the App

1. start the server + the client running on port `3001` & on port `3000`.**   `npm run dev` while being in the project root directory
2. http://localhost:3000/ will opened automatically on your web browser and that is the client server
### Home Screen
3. you will be in the Home Page in which you should enter your name and then click on start practicing
### Practice Screen
4. after click you will be taken to the practice screen where you will have to choose an answer for each question from the 10 questions fetched from backend
5. after choosing an answer if it is correct it will be colored by green if it is wrong it will be colored with red then to go the next question you need to click on next question button.
6. there is a quit button that button in case you want to quit the quiz and direct you to the homepage
### rank Screen
7. your rank will appear coming as an equation according to your score all that is handled by backend
8. you can click on try again to start the quiz over with same username or,
9. you can click on go to homepage to start the quiz with another student name
#### Header
10. if you clicked on the title `WORDS PRACTICE GAME` it will take you to home page
#### footer
11. if you clicked on my name it will take to my LinkedIN  😅 😅 

### Contact Info for Programmer
* Name: _Mohamed Abd El-Samie Ahmad Mansour_
* Email: mmansour92@icloud.com  