const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Conexión a la base de datos
const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'), (err) => {
  if (err) {
    console.error('Error al conectar con SQLite:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite');
  }
});

module.exports = db;

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS person (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      lastName TEXT,
      age TEXT,
      gender TEXT,
      address TEXT,
      phone TEXT
    )`, (err) => {
      if (err) {
        console.error('Error al crear la tabla:', err.message);
      } else {
        console.log('Tabla creada o ya existe.');
      }
    });
  });