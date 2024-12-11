// Import the required modules
import express from "express"; // Express framework for building web applications
import { Client } from "pg"; // PostgreSQL client for database interaction

// Initialize the Express application
const app = express();

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Configure the PostgreSQL client with connection details
const pgClient = new Client({
    user: "firstdb_owner",       // Database user
    password: "NpsGhL92dPcR",   // Database password
    port: 5432,                 // Database port
    host: "ep-round-bar-a5w6qimp.us-east-2.aws.neon.tech", // Database host
    database: "firstdb",        // Database name
    ssl: true                   // Use SSL for secure connection
});

// Connect the PostgreSQL client to the database
pgClient.connect();

// Define a POST route for user signup
app.post("/signup", async (req, res) => {
    // Extract username, password, and email from the request body
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try {

         // const response = await pgClient.query (`INSERT INTO users (username, email, password) values ('${username}',
        //     '${email}', '${password}')`);

        // Use parameterized query to prevent SQL injection
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`;
        
        // Execute the query with the provided data
        const response = await pgClient.query(insertQuery, [username, email, password]);

        // Respond with a success message
        res.json({
            message: "You have signed up"
        });
    } catch (e) {
        // Log the error to the console for debugging
        console.log(e);

        // Respond with an error message
        res.json({
            message: "Error in signing-up"
        });
    }
});

// Start the server and listen on port 3001
app.listen(3001);
