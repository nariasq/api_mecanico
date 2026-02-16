const Vehiculo = require("../models/vehiculoModel");

// =====================
// GET TODOS
// =====================
exports.getVehiculos = (req, res) => {
  Vehiculo.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// =====================
// GET POR ID
// =====================
exports.getVehiculoById = (req, res) => {
  const { id } = req.params;

  Vehiculo.getById(id, (err, results) => {
    if (err) return res.status(500).json(err);

    if (results.length === 0)
      return res.status(404).json({ message: "Vehículo no encontrado" });

    res.json(results[0]);
  });
};

// =====================
// CREAR
// =====================
exports.createVehiculo = (req, res) => {
  Vehiculo.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Vehículo creado",
      id: result.insertId
    });
  });
};

// =====================
// ACTUALIZAR
// =====================
exports.updateVehiculo = (req, res) => {
  const { id } = req.params;

  Vehiculo.update(id, req.body, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Vehículo actualizado" });
  });
};

// =====================
// ELIMINAR
// =====================
exports.deleteVehiculo = (req, res) => {
  const { id } = req.params;

  Vehiculo.remove(id, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Vehículo eliminado" });
  });
};

// =====================
// HISTORIAL (RETO)
// =====================
exports.getHistorialVehiculo = (req, res) => {
  const { id } = req.params;

  Vehiculo.getHistorial(id, (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};

