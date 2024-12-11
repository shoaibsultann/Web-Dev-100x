import express from "express"; // Import Express framework for building server-side applications
import { Client } from "pg"; // Import PostgreSQL client to connect and query the database

const app = express(); // Create an Express application

app.use(express.json()); // Middleware to parse incoming JSON requests

// PostgreSQL client configuration
const pgClient = new Client({
    user: "firstdb_owner", // Database username
    password: "NpsGhL92dPcR", // Database password
    port: 5432, // Default PostgreSQL port
    host: "ep-round-bar-a5w6qimp.us-east-2.aws.neon.tech", // Host for the database
    database: "firstdb", // Name of the database
    ssl: true // Enable SSL for secure database connections
});

// Connect the PostgreSQL client
pgClient.connect();

// Define a POST endpoint for user signup
app.post("/signup", async (req, res) => {
    // Extract user details from the request body
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // Extract address details from the request body
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try {
        // SQL query to insert user details and retrieve the generated user ID
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        
        // SQL query to insert address details associated with the user
        const addressInsertQuery = `INSERT INTO addresses(city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;

        // Begin a transaction to ensure atomicity of both insert operations
        await pgClient.query("BEGIN;");

        // Execute the user insert query and retrieve the user ID
        const response = await pgClient.query(insertQuery, [username, email, password]);
        const userId = response.rows[0].id; // Retrieve the generated user ID

        // Execute the address insert query using the retrieved user ID
        const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);

        // Commit the transaction to finalize both inserts
        await pgClient.query("COMMIT;");

        // Send a success response to the client
        res.json({ message: "You have signed up" });
    } catch (e) {
        // Handle errors during the process
        console.log(e); // Log the error for debugging purposes

        // Roll back the transaction in case of errors
        await pgClient.query("ROLLBACK;");

        // Send an error response to the client
        res.json({ message: "Error in signing-up" });
    }
});

// Start the server on port 3001
app.listen(3001);
