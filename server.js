const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();
//connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connect to Db!")
);

//Middleware
app.use(express.json());
//routes middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => {
  console.log("server is set up and running");
});
