import { deleteTodoQuery, getUserTodosQuery } from "./query";
import { getClient } from "./utils";


async function deleteTodos(id:number) {
    try {
        const client = await getClient();
        const todo = await client.query(deleteTodoQuery, [id])
        const todos = await client.query(getUserTodosQuery,[id])
        console.log("Todo deleted: ", JSON.stringify(todos))
    } catch (error) {
        
    }
}

deleteTodos(1)