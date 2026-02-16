const express = require("express");
const router = express.Router();
const controller = require("../controllers/ordenController");

// =====================
// CRUD ORDENES
// =====================

router.get("/", controller.getOrdenes);
router.get("/:id", controller.getOrdenById);
router.post("/", controller.createOrden);
router.put("/:id", controller.updateOrden);
router.delete("/:id", controller.deleteOrden);

// Costo total por orden (RETO)
router.get("/:id/total", controller.getTotalOrden);

module.exports = router;
