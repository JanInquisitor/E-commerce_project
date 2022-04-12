const express = require('express');
const dotenv = require('dotenv')
const sequelize = require('./config/connection')
const app = require('./app')

// dotenv.config({path: ''})

const PORT = process.env.PORT || 3001;

// sync sequelize models to the database, then turn on the server

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
})

