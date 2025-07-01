const express = require("express");
const { suma, resta, multiplicacion } = require("./calculator");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("API CI/CD Pipeline funcionando correctamente 🚀");
});

router.get("/suma", (req, res) => {
  const { a, b } = req.query;
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Parámetros inválidos" });
  }
  return res.json({ result: suma(Number(a), Number(b)) });
});

router.get("/resta", (req, res) => {
  const { a, b } = req.query;
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Parámetros inválidos" });
  }
  return res.json({ result: resta(Number(a), Number(b)) });
});

router.get("/multiplicacion", (req, res) => {
  const { a, b } = req.query;
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Parámetros inválidos" });
  }
  return res.json({ result: multiplicacion(Number(a), Number(b)) });
});

module.exports = router;
