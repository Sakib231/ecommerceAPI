const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    mobile: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    account:{ type: String, required: true, unique: true },
    balance:{ type: Number, default:5000 }
    },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);