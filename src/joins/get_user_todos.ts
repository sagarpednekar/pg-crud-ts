import { getUserTodosJoinQuery } from "../query";
import { getClient } from "../utils";


async function getUserTodos(user_id:number) {
    const client = await getClient();
    const user_todos = await client.query(getUserTodosJoinQuery,[user_id])
    console.log("User Todos: ", JSON.stringify(user_todos))
    return user_todos
    
}

getUserTodos(1)