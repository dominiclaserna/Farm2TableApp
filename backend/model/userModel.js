import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
      type: String,
      unique: true,
      required: true,
  },
  firstName: String,
  lastName: String,
  userType: String,
  email: {
      type: String,
      unique: true, // Ensure each email is unique
      required: true,
  },
  password: String,
});

const User = mongoose.model('User', userSchema);

export default User;
