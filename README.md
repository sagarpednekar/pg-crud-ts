# SQL Commands

This project provides a set of SQL commands and functions to manage users and todos in a PostgreSQL database.

## Installation

To install the necessary dependencies, run:

```sh
npm install

# Usage
Building the Project
To build the project, run:

```sh
npm run build


# SQL Queries
The SQL queries are defined in src/query.ts. Some of the key queries include: 


createUsersQuery: Creates the users table.
createTodosQuery: Creates the todos table.
insertUser: Inserts a new user.
insertTodo: Inserts a new todo.
dropTables: Drops the users and todos tables.
getUsersQuery: Retrieves all users.
getUserByEmailQuery: Retrieves a user by email.
getUserTodosQuery: Retrieves todos for a user.
updateUserQuery: Updates a user's email.
deleteTodoQuery: Deletes a todo.
getUserTodosJoinQuery: Retrieves users and their todos.