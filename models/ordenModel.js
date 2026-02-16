const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM ordenes_trabajo", callback);
};

exports.getById = (id, callback) => {
  db.query("SELECT * FROM ordenes_trabajo WHERE id=?", [id], callback);
};

exports.create = (data, callback) => {
  const sql = `
    INSERT INTO ordenes_trabajo (vehiculo_id, fecha, estado)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [data.vehiculo_id, data.fecha, data.estado], callback);
};

exports.update = (id, data, callback) => {
  const sql = `
    UPDATE ordenes_trabajo
    SET vehiculo_id=?, fecha=?, estado=?
    WHERE id=?
  `;
  db.query(sql, [data.vehiculo_id, data.fecha, data.estado, id], callback);
};

exports.remove = (id, callback) => {
  db.query("DELETE FROM ordenes_trabajo WHERE id=?", [id], callback);
};

// =====================
// COSTO TOTAL ORDEN (RETO)
// =====================
exports.getTotal = (ordenId, callback) => {
  const sql = `
    SELECT SUM(costo) AS total
    FROM servicios
    WHERE orden_id = ?
  `;

  db.query(sql, [ordenId], callback);
};
