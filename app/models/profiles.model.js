const mongoose = require("mongoose");
const { schema } = require("./accounts.model");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  idAccount: {
    type: schema.objectId,
    ref: "Account",
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
