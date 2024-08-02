import mongoose from "mongoose";
import { any } from "zod";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit();
  }
};

export default dbConnect;
