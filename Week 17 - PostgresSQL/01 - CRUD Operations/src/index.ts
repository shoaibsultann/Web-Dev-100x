import { Client } from "pg";

const pgClient = new Client({
    user: "firstdb_owner",
    password: "NpsGhL92dPcR",
    port: 5432,
    host: "ep-round-bar-a5w6qimp.us-east-2.aws.neon.tech",
    database: "firstdb",
    ssl: true
})

// ******* Reading from user Table *******

// async function main () {
//     await pgClient.connect();
//     const response = await pgClient.query("SELECT * FROM users;")
//     console.log(response.rows);
// };

// ******* Updating a user Table *******

// async function main () {
//     await pgClient.connect();
//     const response = await pgClient.query("UPDATE users SET username='AbdulMohiz' where id='2'")
//     console.log(response.rows);
// };

// ******* Adding into a user Table *******

async function main () {
    await pgClient.connect();
    const response = await pgClient.query("INSERT INTO users (username, email, password) values ('ubaidsultan', 'ubaid@gmail.com', '111222')")
    console.log(response.rows);
};


main()