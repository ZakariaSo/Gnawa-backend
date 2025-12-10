import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionDb } from "./config/database.js";
import "./models/index.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, async () => {
  await connectionDb();
  console.log(`🎸 Gnawa Event API running on port ${PORT}`);
});
