const express = require("express");
const router = express.Router();
const controller = require("../controllers/mecanicoController");

// =====================
// CRUD MECANICOS
// =====================

router.get("/", controller.getMecanicos);
router.get("/:id", controller.getMecanicoById);
router.post("/", controller.createMecanico);
router.put("/:id", controller.updateMecanico);
router.delete("/:id", controller.deleteMecanico);

module.exports = router;
