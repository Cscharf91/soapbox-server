import Category from "../models/Category.js";
import Word from "../models/Word.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ date: -1 });
    res.json(categories);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = new Category({ ...req.body });
    const savedCategory = await newCategory.save();
    res.json(savedCategory);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    const words = await Word.find({ category: req.params.id });
    res.json({ category, words });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    res.json(deletedCategory);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
