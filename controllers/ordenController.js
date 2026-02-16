const Orden = require("../models/ordenModel");

exports.getOrdenes = (req, res) => {
  Orden.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getOrdenById = (req, res) => {
  Orden.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

exports.createOrden = (req, res) => {
  Orden.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId });
  });
};

exports.updateOrden = (req, res) => {
  Orden.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Orden actualizada" });
  });
};

exports.deleteOrden = (req, res) => {
  Orden.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Orden eliminada" });
  });
};

// Costo total (RETO)
exports.getTotalOrden = (req, res) => {
  Orden.getTotal(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};
