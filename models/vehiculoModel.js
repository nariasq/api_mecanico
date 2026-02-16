const db = require("../config/db");

// =====================
// GET TODOS
// =====================
exports.getAll = (callback) => {
  db.query("SELECT * FROM vehiculos", callback);
};

// =====================
// GET POR ID
// =====================
exports.getById = (id, callback) => {
  db.query("SELECT * FROM vehiculos WHERE id = ?", [id], callback);
};

// =====================
// CREAR
// =====================
exports.create = (data, callback) => {
  const sql = `
    INSERT INTO vehiculos (placa, marca, modelo, año, cliente)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [data.placa, data.marca, data.modelo, data.año, data.cliente],
    callback
  );
};

// =====================
// ACTUALIZAR
// =====================
exports.update = (id, data, callback) => {
  const sql = `
    UPDATE vehiculos
    SET placa=?, marca=?, modelo=?, año=?, cliente=?
    WHERE id=?
  `;

  db.query(
    sql,
    [data.placa, data.marca, data.modelo, data.año, data.cliente, id],
    callback
  );
};

// =====================
// ELIMINAR
// =====================
exports.remove = (id, callback) => {
  db.query("DELETE FROM vehiculos WHERE id = ?", [id], callback);
};

// =====================
// HISTORIAL VEHICULO (RETO)
// =====================
exports.getHistorial = (vehiculoId, callback) => {
  const sql = `
    SELECT
      o.id AS orden_id,
      o.fecha,
      o.estado,
      s.descripcion,
      s.costo
    FROM ordenes_trabajo o
    JOIN servicios s ON o.id = s.orden_id
    WHERE o.vehiculo_id = ?
    ORDER BY o.fecha DESC
  `;

  db.query(sql, [vehiculoId], callback);
};
