import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionDb } from "./config/database.js";
import "./models/index.js";
import eventRoutes from "./routes/event.routes.js";  
import artistsRoutes from "./routes/artists.routes.js";
import bookingsRoutes from "./routes/bookings.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Routes
app.use('/api/event', eventRoutes);
app.use('/api/artists', artistsRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, async () => {
  await connectionDb();
  console.log(`🎸 Gnawa Event API running on port ${PORT}`);
});
