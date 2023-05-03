const mongoose = require("mongoose");
const env = require("dotenv");

env.config({ path: "./config/config.env" });

const connectDB = () => {
    mongoose
        .connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((data) =>
            console.log(`mongoDB connected ✅`)
        )
        .catch((err) => console.log(err));
};

module.exports = connectDB;
