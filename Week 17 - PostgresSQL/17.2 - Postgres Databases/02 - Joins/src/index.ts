import express from "express"; // Import Express framework
import { Client } from "pg"; // Import PostgreSQL client for database interaction

const app = express(); // Create an Express application

app.use(express.json()); // Middleware to parse JSON payloads from incoming requests

// Async function to fetch user data and their address together
async function getUserDetailsWithAddress(userId: string) {
    // PostgreSQL client configuration
    const pgClient = new Client({
        user: "firstdb_owner", // Database username
        password: "NpsGhL92dPcR", // Database password
        port: 5432, // PostgreSQL default port
        host: "ep-round-bar-a5w6qimp.us-east-2.aws.neon.tech", // Database host address
        database: "firstdb", // Database name
        ssl: true // Enable SSL for secure connection
    });

    try {
        await pgClient.connect(); // Connect to the PostgreSQL database

        // Query to fetch user details along with their address
        const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;

        // Execute the query with the provided `userId`
        const result = await pgClient.query(query, [userId]);

        // Check if any data was returned
        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows[0]); // Log the found data
            return result.rows[0]; // Return the first result (since IDs are unique)
        } else {
            console.log('No user or address found with the given ID.'); // Log when no data is found
            return null; // Return null if no user or address is found
        }
    } catch (err) {
        // Log and rethrow any errors during the query execution
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await pgClient.end(); // Ensure the database connection is closed
    }
}

// Call the function with a sample user ID for testing
getUserDetailsWithAddress("8");
