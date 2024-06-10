const Service = require("../models/service");

exports.createService = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).send(service);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.send(services);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(service);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.send("Service deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
