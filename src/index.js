const express = require('express');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env${env === 'development' ? '' : `.${env}`}` });

const PORT = process.env.PORT || 3000;
const ENV = process.env.ENV || 'development';

const app = express();

app.use((req, res, next) => {
  console.log(`[${ENV}] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mundo como va en esta vida!');
});

app.get('/suma', (req, res) => {
  const { a, b } = req.query;
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }
  const result = Number(a) + Number(b);
  res.json({ result });
});

app.get('/resta', (req, res) => {
  const { a, b } = req.query;
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }
  const result = Number(a) - Number(b);
  res.json({ result });
});

app.get('/multiplicacion', (req, res) => {
  const { a, b } = req.query;
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }
  const result = Number(a) * Number(b);
  res.json({ result });
});

app.use((err, _req, res, _next) => {
  console.error('Error no controlado:', err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT} [${ENV}]`);
  });
}