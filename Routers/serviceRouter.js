const router = require("express").Router();

const {
  getAllServices,
  creatNewService,
  getService,
  updateService,
  deleteService,
} = require("../Controllers/serviceControllers");

const {
  getOrder,
  deleteOrder,
  updateOrder,
  getAllOrders,
  creatNewOrder,
} = require("../Controllers/OrderControllers");

//service controller
router.route("/").get(getAllServices).post(creatNewService);
router.route("/:id").get(getService).patch(updateService).delete(deleteService);

//order controller
router.route("/").post(creatNewOrder).get(getAllOrders);
router.route("/:email").get(getOrder).delete(deleteOrder).patch(updateOrder);

module.exports = router;
