import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hobby: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("USER", userSchema);

export default User;
