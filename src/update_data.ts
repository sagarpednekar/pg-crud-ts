import { getUsersQuery, updateUserQuery } from "./query";
import { getClient } from "./utils";


async function updateUser(email: string, id: number) {
    try {
        const client = await getClient();
        await client.query(updateUserQuery, [email, id])
        const users  = await client.query(getUsersQuery)
        console.log("User updated: ", JSON.stringify(users))
    } catch (error) {

    }

}

updateUser('sagar@gmail.com',1)