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

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
    });
});