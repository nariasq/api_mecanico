const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM servicios", callback);
};

exports.getById = (id, callback) => {
  db.query("SELECT * FROM servicios WHERE id=?", [id], callback);
};

exports.create = (data, callback) => {
  const sql = `
    INSERT INTO servicios (orden_id, mecanico_id, descripcion, costo)
    VALUES (?, ?, ?, ?)
  `;
  db.query(
    sql,
    [data.orden_id, data.mecanico_id, data.descripcion, data.costo],
    callback
  );
};

exports.update = (id, data, callback) => {
  const sql = `
    UPDATE servicios
    SET orden_id=?, mecanico_id=?, descripcion=?, costo=?
    WHERE id=?
  `;
  db.query(
    sql,
    [data.orden_id, data.mecanico_id, data.descripcion, data.costo, id],
    callback
  );
};

exports.remove = (id, callback) => {
  db.query("DELETE FROM servicios WHERE id=?", [id], callback);
};

// =====================
// SERVICIOS POR MECANICO (RETO)
// =====================
exports.getServiciosPorMecanico = (mecanicoId, callback) => {
  const sql = `
    SELECT
      m.nombre AS mecanico,
      s.descripcion,
      s.costo,
      o.fecha
    FROM servicios s
    JOIN mecanicos m ON s.mecanico_id = m.id
    JOIN ordenes_trabajo o ON s.orden_id = o.id
    WHERE m.id = ?
    ORDER BY o.fecha DESC
  `;

  db.query(sql, [mecanicoId], callback);
};
