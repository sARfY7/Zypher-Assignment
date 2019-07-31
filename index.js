const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 80 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    "mongodb://34.217.107.110/zypher_assignment?retryWrites=true&w=majority",
    error => {
        if (!error) {
            console.log("MongoDB Server Connection Established!");
            app.listen(port, () => {
                console.log(`App Server Started at ${port}!`);
            });
        } else {
            console.log(`Error with Database Connection: ${error}`);
        }
    }
);

// Routing Imports
const authRoutes = require("./routes/auth.route");

// Route Registerations
app.use("/auth", authRoutes);
