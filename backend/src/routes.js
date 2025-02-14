const express = require("express");
const db = require("../database/db");

const router = express.Router();

// Obtener todos los nombres
router.get("/names", (req, res) => {
  db.all("SELECT * FROM nombres", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Agregar un nuevo nombre
router.post("/names", (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: "Nombre es requerido" });

  db.run("INSERT INTO nombres (nombre) VALUES (?)", [nombre], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, nombre });
  });
});

module.exports = { router };
