import mongoose from "mongoose";

const testConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://allieah:@allie123@cluster0.hkkud.mongodb.net/share_prompt?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Test connection successful!");
  } catch (error) {
    console.error("Test connection failed:", error);
  }
};

testConnection();
