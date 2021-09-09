const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  Phone: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    validate: (val) => {
      if (!validator.isEmail(val)) {
        throw new Error("Email is not a valid email");
      }
    },
    minlength: 10,
    maxlength: 30,
  },
  Hobbies: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});
const UserModel = mongoose.model("user_data", UserSchema);
module.exports = UserModel;
