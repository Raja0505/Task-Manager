import mongoose from "mongoose";
import { User } from "../model/user";

export const connectMongoDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "work_manager",
    });
    console.log("Connection Successful");

    // const user = new User({
    //   name: "test",
    //   email: "test@example.com",
    //   password: "testpassword",
    //   about: "this is testing",
    // });
    // await user.save();
    // console.log("User is created");
  } catch (error) {
    console.log("connection failed", error);
  }
};
