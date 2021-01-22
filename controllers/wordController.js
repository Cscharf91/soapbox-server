import Word from "../models/Word.js";
import Category from "../models/Category.js";

const getWords = async (req, res) => {
  try {
    const words = await Word.find().populate("category").sort({ date: -1 });
    res.json(words);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const createWord = async (req, res) => {
  try {
    const newWord = new Word({ ...req.body });
    const savedWord = await newWord.save();
    const wordCategory = await Category.findById(savedWord.category);
    res.json({ word: savedWord, category: wordCategory });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getWord = async (req, res) => {
  try {
    const word = await Word.findById(req.params.id);
    res.json(word);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateWord = async (req, res) => {
  try {
    const updatedWord = await Word.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json(updatedWord);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteWord = async (req, res) => {
  try {
    const deletedWord = await Word.findByIdAndDelete(req.params.id);
    res.json(deletedWord);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default {
  getWords,
  createWord,
  getWord,
  updateWord,
  deleteWord,
};
