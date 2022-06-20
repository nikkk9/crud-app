import express from "express";
const app = express();
import "dotenv/config";
const port = process.env.PORT;
import "./config/db.js";
import userRoute from "./routes/user.js";

// middlewares
app.use(express.json());

app.use(userRoute);

// api routes
app.get("/", (req, res) => {
  res.send("hello guys");
});

// listen
app.listen(port, (req, res) => {
  console.log(`server is running at ${port}`);
});
