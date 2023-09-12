import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: String,
  folder: String,
  message: String,
  created_at: Number,
  attend: Boolean,
  theme: String,
});

export default mongoose.model("Wishes", Schema);
