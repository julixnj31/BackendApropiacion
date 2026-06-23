const express = require("express");

// Crear la aplicación Express
const app = express();

// Importar módulos de rutas
const usersRoutes = require("./src/routes/users.routes");
const tasksRoutes = require("./src/routes/tasks.routes");

// Puerto donde se ejecutará el servidor
const PORT = 3000;

// Ruta principal
app.get("/", (req, res) => {
res.send("Bienvenido al Backend Task Manager");
});

// Ruta de saludo (ejemplo de la guía)
app.get("/saludo", (req, res) => {
res.send("Hola, bienvenido al servidor backend");
});

// Módulo de usuarios
app.use("/users", usersRoutes);

// Módulo de tareas
app.use("/tasks", tasksRoutes);

// Iniciar servidor
app.listen(PORT, () => {
console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
