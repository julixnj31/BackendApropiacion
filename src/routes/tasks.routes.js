const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Listado de tareas" });
});

router.post("/", (req, res) => {
  res.json({ message: "Crear tarea" });
});

module.exports = router;