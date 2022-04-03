const express = require('express');
const userRoutes = require('./router/user-routes');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const app = express();

// routes
app.use('/api/user', userRoutes);

// server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})