const express = require("express");

const app = express();

const usersRoutes = require("./src/routes/users.routes");
const tasksRoutes = require("./src/routes/tasks.routes");

const PORT = 3000;

app.use("/users", usersRoutes);
app.use("/tasks", tasksRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenido al Backend Task Manager");
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});