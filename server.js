const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');  
const db = require('./src/config/db'); 

dotenv.config();

const app = express();


app.use(cors());


app.use(express.json());


app.get('/test-db', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT 1 + 1 AS solution');
        res.send(`Database connected! Solution: ${rows[0].solution}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Database connection failed');
    }
});


app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});


const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
