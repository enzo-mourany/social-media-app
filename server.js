const express = require('express');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})