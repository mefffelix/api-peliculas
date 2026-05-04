const validarToken = require('../middlewares/auth');
const express = require('express');
const router = express.Router();
const service = require('../services/peliculaService');

router.use(validarToken);
router.get('/', async (req, res) => {
  res.json(await service.getAll());
});

router.get('/:id', async (req, res) => {
  const peli = await service.getById(req.params.id);
  res.json(peli);
});

router.post('/', async (req, res) => {
  const nueva = await service.create(req.body);
  res.json(nueva);
});

router.put('/:id', async (req, res) => {
  const actualizada = await service.update(req.params.id, req.body);
  res.json(actualizada);
});

router.delete('/:id', async (req, res) => {
  await service.remove(req.params.id);
  res.json({ mensaje: 'Eliminado' });
});

module.exports = router;