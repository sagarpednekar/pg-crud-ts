import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://postgres:admin@123@localhost:5432/postgres");
    await client.connect();
    console.log("Posgress is connected!!")
    return client;
}