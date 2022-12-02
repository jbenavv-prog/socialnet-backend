const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  idAccount: {
    type: Schema.ObjectId,
    ref: "Account",
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  location: {
    type: String,
  },
  photoProfile: {
    type: String,
  },
});

const profiles = mongoose.model("Profile", profileSchema);

module.exports = profiles;
