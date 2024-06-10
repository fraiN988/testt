const express = require("express");
const {
  createMaster,
  getMasters,
  updateMaster,
  deleteMaster,
} = require("../controllers/masterController");
const { auth } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");
const router = express.Router();

router.post("/", auth, upload.single("photo"), createMaster);
router.get("/", auth, getMasters);
router.put("/:id", auth, upload.single("photo"), updateMaster);
router.delete("/:id", auth, deleteMaster);

module.exports = router;
