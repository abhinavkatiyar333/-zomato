// start server
require('dns').setDefaultResultOrder('ipv4first');
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

const server = app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Increase timeout to 5 minutes for video uploads
server.timeout = 300000;