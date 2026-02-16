const express = require("express");
const router = express.Router();
const controller = require("../controllers/vehiculoController");

// =====================
// CRUD VEHICULOS
// =====================

// Obtener todos
router.get("/", controller.getVehiculos);

// Obtener uno por ID
router.get("/:id", controller.getVehiculoById);

// Crear vehículo
router.post("/", controller.createVehiculo);

// Actualizar vehículo
router.put("/:id", controller.updateVehiculo);

// Eliminar vehículo
router.delete("/:id", controller.deleteVehiculo);

// Historial del vehículo (RETO)
router.get("/:id/historial", controller.getHistorialVehiculo);

module.exports = router;
