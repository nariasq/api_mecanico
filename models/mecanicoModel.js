const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM mecanicos", callback);
};

exports.getById = (id, callback) => {
  db.query("SELECT * FROM mecanicos WHERE id = ?", [id], callback);
};

exports.create = (data, callback) => {
  const sql = `
    INSERT INTO mecanicos (nombre, especialidad, telefono)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [data.nombre, data.especialidad, data.telefono], callback);
};

exports.update = (id, data, callback) => {
  const sql = `
    UPDATE mecanicos
    SET nombre=?, especialidad=?, telefono=?
    WHERE id=?
  `;
  db.query(sql, [data.nombre, data.especialidad, data.telefono, id], callback);
};

exports.remove = (id, callback) => {
  db.query("DELETE FROM mecanicos WHERE id=?", [id], callback);
};
