const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Listado de tareas");
});

router.post("/", (req, res) => {
  res.send("Crear tarea");
});

module.exports = router;