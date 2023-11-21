import express from "express";
import mongoose from "mongoose";
import { fetchDetails, register } from "./Controllers/UserController.js";

const app = express();
app.use(express.json());

app.post("/register", register);
app.get("/fetchdetails", fetchDetails);

const uri =
  "mongodb+srv://manoj:manoj123@cluster0.l8s5peb.mongodb.net/gisfytask";

mongoose
  .connect(uri)
  .then(() => console.log("mongodb connected"))
  .catch(() => console.log("error on connection "));

app.listen(5000, () => {
  console.log("app running in port 5000");
});
