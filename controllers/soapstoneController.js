import Soapstone from "../models/Soapstone.js";

const getSoapstones = async (req, res) => {
  try {
    const soapstones = await Soapstone.find().sort({ date: -1 });
    res.json(soapstones);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const createSoapstone = async (req, res) => {
  try {
    const newSoapstone = new Soapstone({ ...req.body });
    const savedSoapstone = await newSoapstone.save();
    res.json(savedSoapstone);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getSoapstone = async (req, res) => {
  try {
    const soapstone = await Soapstone.findById(req.params.id);
    res.json(soapstone);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateSoapstone = async (req, res) => {
  try {
    const updatedSoapstone = await Soapstone.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json(updatedSoapstone);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteSoapstone = async (req, res) => {
  try {
    const deletedSoapstone = await Soapstone.findByIdAndDelete(req.params.id);
    res.json(deletedSoapstone);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default {
  getSoapstones,
  createSoapstone,
  getSoapstone,
  updateSoapstone,
  deleteSoapstone,
};
