const express = require("express");
const {
  createService,
  getServices,
  updateService,
  deleteService,
} = require("../controllers/serviceController");
const { auth } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", auth, createService);
router.get("/", auth, getServices);
router.put("/:id", auth, updateService);
router.delete("/:id", auth, deleteService);

module.exports = router;
