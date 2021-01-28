import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SoapstoneSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    min: 2,
    required: true,
  },
  prompt: {
    type: Schema.Types.ObjectId,
    ref: "Prompt",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Soapstone = mongoose.model("Soapstone", SoapstoneSchema);
export default Soapstone;
