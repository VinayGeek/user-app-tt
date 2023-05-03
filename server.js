const app = require("./app");
const env = require("dotenv");
const connectDB = require("./config/database")

env.config({ path: "./config/config.env" });

connectDB()

app.get("/", () => {
    console.log("firstfirstfirst")
})

app.listen(process.env.PORT, () => {
    // console.clear();
    console.log(`http://localhost:${process.env.PORT} ✅`);
});
