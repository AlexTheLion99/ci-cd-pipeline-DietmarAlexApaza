const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log('Middleware ejecutado');
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mundo como  va en esta vida!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
