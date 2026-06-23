const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Listado de usuarios");
});

router.post("/", (req, res) => {
  res.send("Crear usuario");
});

module.exports = router;