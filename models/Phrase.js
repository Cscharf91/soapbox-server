import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PhraseSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Phrase = mongoose.model("Phrase", PhraseSchema);
export default Phrase;
