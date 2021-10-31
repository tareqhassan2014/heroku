require("dotenv").config();
require("express-async-errors");
const cors = require("cors");

const express = require("express");
const app = express();

const connectDB = require("./DataBase/connectDB");

//routers
const servicesRoute = require("./Routers/serviceRouter");
const OrdersRoute = require("./Routers/orderRouter");

const notFoundMiddleware = require("./Middleware/notFoundMiddleware");
const errorHandlerMiddleware = require("./Middleware/errorHandlerMiddleware");

// middleware
app.use(express.json());
app.use(cors());

// routes

app.get("/", (req, res) => {
  res.send(
    '<h1> Travel API </h1><a href="/api/v1/services">products route</a>'
  );
});

app.use("/api/v1/services", servicesRoute);
app.use("/api/v1/orders", OrdersRoute);

//custom middleWare
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`look at http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
