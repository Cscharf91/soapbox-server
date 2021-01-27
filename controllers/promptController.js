import Prompt from "../models/Prompt.js";
import Soapstone from "../models/Soapstone.js";

const getPrompts = async (req, res) => {
  try {
    const prompts = await Prompt.find().sort({ date: -1 });
    res.json(prompts);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const createPrompt = async (req, res) => {
  try {
    const newPrompt = new Prompt({ ...req.body });
    const savedPrompt = await newPrompt.save();
    res.json(savedPrompt);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getPrompt = async (req, res) => {
  try {
    const { id } = req.params;
    const prompt = await Prompt.findById(id);
    const soapstones = await Soapstone.find({ prompt: id });
    res.json({ prompt, soapstones });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updatePrompt = async (req, res) => {
  try {
    const updatedPrompt = await Prompt.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json(updatedPrompt);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deletePrompt = async (req, res) => {
  try {
    const deletedPrompt = await Prompt.findByIdAndDelete(req.params.id);
    res.json(deletedPrompt);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default {
  getPrompts,
  createPrompt,
  getPrompt,
  updatePrompt,
  deletePrompt,
};
