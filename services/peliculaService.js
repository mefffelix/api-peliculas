const Pelicula = require('../models/pelicula');

const getAll = async () => {
  return await Pelicula.findAll();
};

const getById = async (id) => {
  return await Pelicula.findByPk(id);
};

const create = async (data) => {
  return await Pelicula.create(data);
};

const update = async (id, data) => {
  const peli = await Pelicula.findByPk(id);
  if (!peli) return null;
  return await peli.update(data);
};

const remove = async (id) => {
  const peli = await Pelicula.findByPk(id);
  if (!peli) return null;
  await peli.destroy();
  return true;
};

module.exports = { getAll, getById, create, update, remove };