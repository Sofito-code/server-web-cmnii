const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Ruta para la base de datos
const dbPath = path.join(process.cwd(), 'database.sqlite');

// Comprobar si la base de datos ya existe
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, '');
}

// Conexión a la base de datos SQLite
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error al conectar con SQLite:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite');
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
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

module.exports = db;
