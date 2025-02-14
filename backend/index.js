
const express = require("express");
const cors = require("cors");
const pool = require("./database/db");

const app = express();
app.use(cors());
app.use(express.json()); // Para manejar JSON
async function testDBConnection() {
  try {
    const result = await pool.query("SELECT NOW()"); 
    console.log("✅ Conexión exitosa a PostgreSQL. Fecha actual:", result.rows[0].now);
  } catch (err) {
    console.error("❌ Error al conectar con PostgreSQL:", err);
  }
}

testDBConnection();

// Obtener todos los nombres
app.get("/api/names", async (req, res) => {
  try {
    const result = await pool.query("SELECT nombre FROM nombres");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener los nombres" });
  }
});

// Agregar un nuevo nombre
app.post("/api/names", async (req, res) => {
    try {
      console.log("Recibido en backend:", req.body); // Verificar qué datos llegan
      const { name } = req.body;
      const result = await pool.query("INSERT INTO nombres (nombre) VALUES ($1) RETURNING *", [name]);
      res.json(result.rows[0]);
    } catch (err) {
      console.error("Error en backend:", err);
      res.status(500).json({ error: "Error al guardar el nombre" });
    }
  });
  

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
