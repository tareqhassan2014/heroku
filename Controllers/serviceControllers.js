const Service = require("../Schema/ServiceSchema");

const getAllServices = async (req, res) => {
  const allServices = await Service.find({});
  res.status(200).json(allServices);
};

const creatNewService = async (req, res) => {
  const service = await Service.create(req.body);
  res.status(201).json(service);
};

const getService = async (req, res) => {
  const { id: serviceID } = req.params;
  const service = await Service.findOne({ _id: serviceID });
  res.status(200).json(service);
};

const updateService = async (req, res) => {
  const { id: serviceID } = req.params;

  const service = await Service.findOneAndUpdate({ _id: serviceID }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(service);
};

const deleteService = async (req, res) => {
  const { id: serviceID } = req.params;
  const result = await Service.findOneAndDelete({ _id: serviceID });
  res.status(201).json(result);
};

module.exports = {
  getAllServices,
  creatNewService,
  getService,
  updateService,
  deleteService,
};
