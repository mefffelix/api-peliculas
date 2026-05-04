const express = require('express');
const app = express();
const sequelize = require('./config/database');
const rutasPeliculas = require('./routes/peliculaRoutes');
const authRoutes = require('./routes/auth.routes');

app.use(express.json());

/* Logger */
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/* API KEY */
const validarApiKey = (req, res, next) => {
  if (req.query.key === '12345') next();
  else res.status(403).json({ error: 'API KEY inválida' });
};

app.use(authRoutes);
app.use('/peliculas', validarApiKey, rutasPeliculas);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
});