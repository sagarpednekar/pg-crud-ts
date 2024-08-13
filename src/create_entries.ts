import { insertTodo, insertUser } from "./query";
import { getClient } from "./utils";

export async function add_user(email: string, password: string) {
    try {
        const client = await getClient()
        const user_details = [email, password]
        const user = await client.query(insertUser, user_details);
        console.log("User is created: " + JSON.stringify(user))
        return user
    } catch (error) {
        console.error("Error while creating user: " + error)
    }
}

export async function add_todo(title: string, description: string, user_id: string, is_completed?: boolean) {
    try {
        const client = await getClient()
        const todo_details = [title, description, user_id, is_completed ? is_completed: false]
        const todo = client.query(insertTodo, todo_details)
        console.log("Todo is created: " +JSON.stringify(todo))
        return todo
    } catch (error) {
        console.error("Error while creating todo: " + error)

    }

}