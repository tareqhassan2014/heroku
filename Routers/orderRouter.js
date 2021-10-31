const router = require("express").Router();
const {
  getOrder,
  deleteOrder,
  updateOrder,
  getAllOrders,
  creatNewOrder,
} = require("../Controllers/OrderControllers");


//order controller
router.route("/").post(creatNewOrder).get(getAllOrders);
router.route("/:email").get(getOrder);
router.route("/:id").delete(deleteOrder).patch(updateOrder);

module.exports = router;
