import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Startuje przenośną bazę w pamięci RAM
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    // Łączy mongoose z bazą w pamięci
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Połączono z przenośną bazą MongoDB (mongodb-memory-server)");

    // Middleware
    app.use(express.json());
    app.use(cookieParser());

    // Routing
    app.use("/api/auth", authRoutes);
    app.use("/api/messages", messageRoutes);
    app.use("/api/users", userRoutes);

    // Start serwera
    server.listen(PORT, () => {
      console.log(`Serwer działa na porcie ${PORT}`);
    });

    // Obsługa zamknięcia procesu
    process.on("SIGINT", async () => {
      await mongoose.disconnect();
      await mongoServer.stop();
      process.exit(0);
    });

  } catch (error) {
    console.error("Błąd inicjalizacji:", error);
    process.exit(1);
  }
}

startServer();
