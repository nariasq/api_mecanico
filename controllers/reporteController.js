const Reporte = require("../models/servicioModel");

exports.getServiciosPorMecanico = (req, res) => {
  Reporte.getServiciosPorMecanico(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
