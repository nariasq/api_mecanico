const Servicio = require("../models/servicioModel");

exports.getServicios = (req, res) => {
  Servicio.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getServicioById = (req, res) => {
  Servicio.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

exports.createServicio = (req, res) => {
  Servicio.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId });
  });
};

exports.updateServicio = (req, res) => {
  Servicio.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Servicio actualizado" });
  });
};

exports.deleteServicio = (req, res) => {
  Servicio.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Servicio eliminado" });
  });
};
