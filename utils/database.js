// import mongoose from "mongoose";

// let isConnected = false; // track the connection

// export const connectToDB = async () => {
//   mongoose.set("strictQuery", true);

//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "share_prompt",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = true;

//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };
import mongoose from "mongoose";

let isConnected = false; // Track the connection state

export const connectToDB = async () => {
  // Set strict query mode for Mongoose
  mongoose.set("strictQuery", true);

  // Return early if already connected
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    // Connect to MongoDB

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt", // Match this with the database name if needed
    });

    // Mark as connected
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    // Log and throw the error
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
