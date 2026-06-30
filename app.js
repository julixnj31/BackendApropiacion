const express = require("express");

// Crear la aplicación Express
const app = express();

// Permitir recibir y responder con JSON
app.use(express.json());

// Importar módulos de rutas
const usersRoutes = require("./src/routes/users.routes");
const tasksRoutes = require("./src/routes/tasks.routes");

// Puerto donde se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get("/", (req, res) => {
  res.json({ message: "Hola mundo desde el servidor backend" });
});

// Ruta de saludo (ejemplo de la guía)
app.get("/saludo", (req, res) => {
  res.json({ message: "Hola, bienvenido al servidor backend" });
});

// Módulo de usuarios
app.use("/users", usersRoutes);

// Módulo de tareas
app.use("/tasks", tasksRoutes);

// Iniciar servidor
app.listen(PORT, "0.0.0.0", () => {
console.log(`Servidor ejecutándose en http://0.0.0.0:${PORT}`);
console.log(`También puedes abrirlo desde tu red usando http://<TU_IP>:${PORT}`);
});
