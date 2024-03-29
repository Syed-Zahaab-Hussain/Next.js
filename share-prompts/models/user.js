import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: true,
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
