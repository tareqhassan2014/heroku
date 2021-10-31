const Order = require("../Schema/OrderSchema");

const getAllOrders = async (req, res) => {
  const allOrders = await Order.find({});
  res.status(200).json(allOrders);
};

const creatNewOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
};

const deleteOrder = async (req, res) => {
  const { id: orderID } = req.params;
  const result = await Order.findOneAndDelete({ _id: orderID });
  res.status(201).json(result);
};

const getOrder = async (req, res) => {
  const email = req.params.email;
  const order = await Order.find({ Email: email });
  res.status(200).json(order);
};

const updateOrder = async (req, res) => {
  const { id: orderID } = req.params;

  const order = await Order.findOneAndUpdate({ _id: orderID }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(order);
};

module.exports = {
  getOrder,
  deleteOrder,
  updateOrder,
  getAllOrders,
  creatNewOrder,
};
