require('dotenv').config({path: "./.dotenv"});
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Connect The Database
require('./db')();

// Registering Third Party Middleware.
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
};
app.use(express.json());
app.use(cors());

// Registering The Routes.
app.use("/crm", require("./src/routes/crmRoutes"));

// Starting the Application
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is Up and Running on Port: ${PORT}`));
