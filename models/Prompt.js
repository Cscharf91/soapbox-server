import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PromptSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Prompt = mongoose.model("Prompt", PromptSchema);
export default Prompt;
