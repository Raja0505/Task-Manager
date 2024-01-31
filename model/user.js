import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
  name: String,
  role: String,
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password Required"],
  },
});
export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
