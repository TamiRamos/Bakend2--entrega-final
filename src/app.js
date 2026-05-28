import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("🚀 Backend Final Backend 2 Running");
});
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api/carts", cartRoutes);

app.use("/api/tickets", ticketRoutes);

export default app;