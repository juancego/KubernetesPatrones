const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "../database/data.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error al conectar con la base de datos", err);
  } else {
    console.log("✅ Base de datos conectada.");
  }
});

// Crear la tabla si no existe
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS nombres (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL
    )`
  );
});

module.exports = db;
