import { Client } from "pg";

//const pgClient = new Client("postgresql://firstdb_owner:NpsGhL92dPcR@ep-round-bar-a5w6qimp.us-east-2.aws.neon.tech/firstdb?sslmode=require")

const pgClient = new Client({
    user: "firstdb_owner",
    password: "NpsGhL92dPcR",
    port: 5432,
    host: "ep-round-bar-a5w6qimp.us-east-2.aws.neon.tech",
    database: "firstdb",
    ssl: true
})

async function main () {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;")
    console.log(response.rows);

}

main()