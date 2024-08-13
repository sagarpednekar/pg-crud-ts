import { add_todo, add_user } from "./create_entries";
import { createTodosQuery, createUsersQuery, dropTables } from "./query";
import { getClient } from "./utils";

async function createUser(email: string, password: string) {
    try {
        const client = await getClient();
        await client.query(dropTables)
        console.log("Creating users table");
        await client.query(createUsersQuery);
        console.info("User table created successfully......")
        console.log("Creating todos table");
        
        await client.query(createTodosQuery)

        console.info("Todos table created successfully......")

        const user = await add_user(email,password);

       await add_todo("Take a break","15 mins break",user?.rows[0].id)
       await add_todo("Wake up @5AM","Reminder 1",user?.rows[0].id)


        
        // await add_todo()


    } catch (error) {
        console.error("Error: While creating tables"+ error)
    }

}

createUser('sagar@gmail.com',"pass1234")

// createUser('pooja@gmail.com',"pass1234")
