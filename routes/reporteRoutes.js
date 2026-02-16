const express = require("express");
const router = express.Router();
const controller = require("../controllers/reporteController");

// =====================
// REPORTES
// =====================

// Servicios realizados por mecánico (RETO)
router.get("/mecanico/:id", controller.getServiciosPorMecanico);

module.exports = router;
