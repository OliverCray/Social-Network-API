# Social-Network-API

## Purpose of Task

Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents

- [Description](#description)

- [Usage](#usage)

- [Walkthrough](#walkthrough)

## Description

This is a backend application for a social network. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. A user can perform CRUD operations on users, thoughts, and reactions using a tool like Postman or Insomnia. A user can also add and remove friends.

A user can perform the following CRUD operations on users:

- GET all users
- GET a single user by its \_id and populated thought and friend data
- POST a new user
- PUT to update a user by its \_id
- DELETE to remove user by its \_id

A user can perform the following CRUD operations on thoughts:

- GET all thoughts
- GET a single thought by its \_id
- POST a new thought
- PUT to update a thought by its \_id
- DELETE to remove a thought by its \_id

A user can perform the following CRUD operations on reactions to thoughts:

- POST to add a reaction to a thought
- DELETE to remove a reaction by the reaction's reactionId value

A user can perform the following CRUD operations on a friend list:

- POST to add a new friend to a user's friend list
- DELETE to remove a friend from a user's friend list

## Usage

To use this application, first clone the repository and open it in your code editor. Open a new terminal and type the following command to install the required dependencies.

```sh
npm i
```

If you wish to seed the database with some data, type the following command in the terminal.

```sh
npm run seed
```

To start the server, type the following command in the terminal.

```sh
npm start
```

To run the server in development mode, using nodemon, type the following command in the terminal. This will automatically restart the server when changes are made to the code.

```sh
npm run dev
```

To test the routes, use a tool like Postman or Insomnia. The routes are as follows:

- GET all users: http://localhost:3001/api/users
- GET a single user by its \_id: http://localhost:3001/api/users/:id
- POST a new user: http://localhost:3001/api/users
- PUT to update a user by its \_id: http://localhost:3001/api/users/:id
- DELETE to remove user by its \_id: http://localhost:3001/api/users/:id

- GET all thoughts: http://localhost:3001/api/thoughts
- GET a single thought by its \_id: http://localhost:3001/api/thoughts/:id
- POST a new thought: http://localhost:3001/api/thoughts
- PUT to update a thought by its \_id: http://localhost:3001/api/thoughts/:id
- DELETE to remove a thought by its \_id: http://localhost:3001/api/thoughts/:id

- POST to add a reaction to a thought: http://localhost:3001/api/thoughts/:thoughtId/reactions
- DELETE to remove a reaction by the reaction's reactionId: http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId

- POST to add a new friend to a user: http://localhost:3001/api/users/:userId/friends/:friendId
- DELETE to remove a friend from a user: http://localhost:3001/api/users/:userId/friends/:friendId

## Walkthrough

A walkthrough video for this application is available [here](https://drive.google.com/file/d/1HkanJNk4XB3_2bBWYe58NPhEST236_At/view?usp=sharing)
