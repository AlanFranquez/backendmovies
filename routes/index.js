var express = require('express');
const Movies = require('../src/dbconnection');
var router = express.Router();




/* GET home page. */
router.get('/', async(req, res, next) => {

  const buscar = await Movies.find();

  try {
    res.json(buscar);

  } catch (error) {
    console.log(error);
  }
});


// post
router.post('/', async(req, res) => {
  
  const {name, age, rating} = req.body;
  const buscar = await Movies.find({name: name});

  if(buscar.length > 0) {
    return res.status(401).send('Pelicula ya registrada en la BD');
  }

  try {
    const nueva = new Movies({name: name, age: age, rating: rating});
    await nueva.save();
    
    res.status(201).send('Pelicula agregada correctamente');

  } catch (error) {
    console.log(error);
  }

});

//
router.delete('/', async (req, res) => {
  const { name } = req.params; // Obtener el ID de la película de los parámetros de la URL

  try {
    const movie = await Movies.findOneAndDelete(name); // Buscar y eliminar la película por su ID

    if (!movie) {
      return res.status(404).send('La película no se encontró');
    }

    res.status(200).send('Película eliminada correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar la película');
  }
});




module.exports = router;
