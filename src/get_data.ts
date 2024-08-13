import { getUserByEmailQuery, getUsersQuery, getUserTodosQuery } from "./query";
import { getClient } from "./utils";

async function getUsers() {
    try {
        const client = await getClient()
        const users  = await client.query(getUsersQuery)
        console.log("Users", JSON.stringify(users))
        return users
    } catch (error) {
        
    }
}

async function getUserByEmail(email:string) {
    try {
        const client = await getClient()
        const user = await client.query(getUserByEmailQuery,[email])
        console.log("Users", JSON.stringify(user))
        return user
    } catch (error) {
        
    }
}

async function getTodos(user_id:number) {
    try {
        const client = await getClient()
        const todos = await client.query(getUserTodosQuery,[user_id])
        console.log("Todos: ",JSON.stringify(todos))    
        return todos
    } catch (error) {
        
    }
    
}

getUsers();

getUserByEmail("sagar")

getTodos(1)
