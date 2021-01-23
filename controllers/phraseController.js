import Phrase from "../models/Phrase.js";

const getPhrases = async (req, res) => {
  try {
    const phrases = await Phrase.find().sort({ date: -1 });
    res.json(phrases);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const createPhrase = async (req, res) => {
  try {
    const newPhrase = new Phrase({ ...req.body });
    const savedPhrase = await newPhrase.save();
    res.json(savedPhrase);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getPhrase = async (req, res) => {
  try {
    const phrase = await Phrase.findById(req.params.id);
    res.json(phrase);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updatePhrase = async (req, res) => {
  try {
    const updatedPhrase = await Phrase.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json(updatedPhrase);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deletePhrase = async (req, res) => {
  try {
    const deletedPhrase = await Phrase.findByIdAndDelete(req.params.id);
    res.json(deletedPhrase);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default {
  getPhrases,
  createPhrase,
  getPhrase,
  updatePhrase,
  deletePhrase,
};
