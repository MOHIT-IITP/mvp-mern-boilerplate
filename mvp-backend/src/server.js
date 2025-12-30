import express from "express";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello world");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
