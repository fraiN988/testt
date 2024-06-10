const express = require("express");
const mongoose = require("./db");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const masterRoutes = require("./routes/masterRoutes");
const app = express();
touch index.js


app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use("/auth", authRoutes);
app.use("/services", serviceRoutes);
app.use("/masters", masterRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
