# Blog App

This project is a fullstack React and Express App using React hooks and was bootstrapped with create-react-app. It makes use of PSQL database and requires auth0 settings.

#### The root folder contains 2 directories:

1. The "client" directory which contains the React.js App and
2. The "server" directory which contains the node.js express server.

## How to run the App:

- Firstly, open 2 terminals to cd into the different directories to install the necessary dependencies.

- Secondly, install PSQL. Visit the [Offical PSQL Website](https://www.postgresql.org/) for more information.

#### 1st terminal

`cd client`

#### 2nd terminal

`cd server`

#### Run `npm install` in both terminals

### Start the client and server at the same time.

#### Run `npm start` (to start the client at localhost:3000)

and

#### Run `npm run devstart` (to start the nodemon at localhost:5000)

### Setting up PSQL Database

1. Open the PSQL shell and login.
2. Create a PSQL database for the project _(if you have not already done so)_.
3. Copy the SQL code in the server/main/schema.sql file and paste it in as commands into the PSQL shell.
4. Goto the server/main/db.js file and make required adjustments in the db.js file for the PSQL database login info.

#### After setting up the PSQL database and starting the app, the app is ready to go.
