console.log("🟢 Iniciando servidor...");

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { router } = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
console.log("📂 Contenido de routes:", router);
app.use("/", router);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
