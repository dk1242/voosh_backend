const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const app = express();

app.use(express.json());

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Express JS on Vercel");
});

app.get("/ping", (req, res) => {
  res.send("pong 🏓");
});
app.get("/favicon.ico", (req, res) => res.status(204));
app.use("/api", userRoutes);
app.use("/api", orderRoutes);

const port = process.env.PORT || 8000;
app.listen(port, (err, data) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log(`server listening on port: ${port}`);
  }
});
