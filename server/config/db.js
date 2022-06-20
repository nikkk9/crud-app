import mongoose from "mongoose";
import "dotenv/config";

const db = process.env.DB;

mongoose
  .connect(db)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("db error", err);
  });
