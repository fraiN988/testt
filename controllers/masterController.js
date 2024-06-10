const Master = require("../models/master");
const fs = require("fs");
const path = require("path");

exports.createMaster = async (req, res) => {
  try {
    const master = new Master({ ...req.body, photo: req.file.path });
    await master.save();
    res.status(201).send(master);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getMasters = async (req, res) => {
  try {
    const masters = await Master.find();
    res.send(masters);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateMaster = async (req, res) => {
  try {
    const master = await Master.findById(req.params.id);
    if (req.file) {
      fs.unlinkSync(path.join(__dirname, "../", master.photo));
      master.photo = req.file.path;
    }
    Object.assign(master, req.body);
    await master.save();
    res.send(master);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteMaster = async (req, res) => {
  try {
    const master = await Master.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, "../", master.photo));
    await master.remove();
    res.send("Master deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
