const mongoose = require("mongoose");

mongoose
    .connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.fwnsx.mongodb.net/social-media-app', {
        useNewUrlParser: true,
        useUnifiesTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));