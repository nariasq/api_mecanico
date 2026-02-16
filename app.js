const express = require("express");
const cors = require("cors");

const app = express();


// =====================
// CONEXIÓN A LA BASE DE DATOS
// =====================
require("./config/db");


// =====================
// MIDDLEWARES
// =====================
app.use(cors());          // permite peticiones desde otros frontends
app.use(express.json());  // permite recibir JSON


// =====================
// RUTAS
// =====================
app.use("/vehiculos", require("./routes/vehiculoRoutes"));
app.use("/mecanicos", require("./routes/mecanicoRoutes"));
app.use("/ordenes", require("./routes/ordenRoutes"));
app.use("/servicios", require("./routes/servicioRoutes"));
app.use("/reportes", require("./routes/reporteRoutes"));


// =====================
// HEALTH CHECK
// =====================
app.get("/health", (req, res) => {
  res.json({ status: "API funcionando" });
});


// =====================
// MANEJO GLOBAL DE ERRORES
// =====================
app.use(require("./middlewares/errorHandler"));


// =====================
// INICIAR SERVIDOR
// =====================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});

