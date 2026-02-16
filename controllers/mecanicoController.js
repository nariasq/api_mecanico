const Mecanico = require("../models/mecanicoModel");

exports.getMecanicos = (req, res) => {
  Mecanico.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getMecanicoById = (req, res) => {
  Mecanico.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

exports.createMecanico = (req, res) => {
  Mecanico.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId });
  });
};

exports.updateMecanico = (req, res) => {
  Mecanico.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Mecánico actualizado" });
  });
};

exports.deleteMecanico = (req, res) => {
  Mecanico.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Mecánico eliminado" });
  });
};
