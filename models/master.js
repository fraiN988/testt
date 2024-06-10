const mongoose = require("mongoose");

const masterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  photo: { type: String, required: true },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Master", masterSchema);
