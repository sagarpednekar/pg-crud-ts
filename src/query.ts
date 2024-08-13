export const createUsersQuery = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) UNIQUE NOT NULL
    )
`

export const createTodosQuery = `
    CREATE TABLE IF NOT EXISTS todos(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description  TEXT,
    user_id INTEGER REFERENCES users(id),
    is_completed BOOLEAN DEFAULT FALSE
)
`

export const insertUser = `
    INSERT INTO users(email,password)
    VALUES ($1,$2)
    RETURNING id

`

export const insertTodo = `
    INSERT INTO todos(title,description,user_id,is_completed)
    VALUES ($1,$2,$3,$4)
    RETURNING id
`
export const dropTables = `
    DROP TABLE IF EXISTS todos;
    DROP TABLE IF EXISTS users;

`

export const getUsersQuery = `
    SELECT *
    FROM users
`

export const getUserByEmailQuery = `
    SELECT *
    FROM users
    WHERE email = $1
`

export const getUserTodosQuery = `
    SELECT *
    FROM todos
    WHERE user_id = $1
`
export const updateUserQuery = `
    UPDATE users
    SET email = $1
    WHERE id = $2
`

export const deleteTodoQuery = `
    DELETE FROM todos
    WHERE id = $1
    `

export const getUserTodosJoinQuery = `
    SELECT u.id, email,t.title
    FROM users u
    INNER JOIN todos t
    ON u.id = t.user_id
    WHERE u.id = $1

`    

 