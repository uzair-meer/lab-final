import mongoose from "mongoose";

const connectDB = async (DATABASE_URI) => {
  try {
    const DB_Options = {
      dbName: "lab-final",
    };
    mongoose.set("strictQuery", true);
    await mongoose.connect(DATABASE_URI, DB_Options);
    console.log("connected successfuly...");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
