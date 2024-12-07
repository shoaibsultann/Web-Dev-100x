import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client({
    user: "firstdb_owner",
    password: "NpsGhL92dPcR",
    port: 5432,
    host: "ep-round-bar-a5w6qimp.us-east-2.aws.neon.tech",
    database: "firstdb",
    ssl: true
})

pgClient.connect();

app.post("/signup", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try{
        // const response = await pgClient.query (`INSERT INTO users (username, email, password) values ('${username}',
        //     '${email}', '${password}')`);

        const insertQuery= `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`

        const response = await pgClient.query(insertQuery, [username, email, password]);
    
        res.json({
            message: "You have signed up"
        })
    } catch(e){
        console.log(e);
        
        res.json({
           message: "Error in signing-up"
        })
    }

})

app.listen(3001)