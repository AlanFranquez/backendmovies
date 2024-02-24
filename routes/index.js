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
  
  const {name, year, rating, image, descripcion} = req.body;
  const buscar = await Movies.find({name: name});

  if(buscar.length > 0) {
    return res.status(401).send('Pelicula ya registrada en la BD');
  }

  try {
    const nueva = new Movies({name: name, year: year, rating: rating, image: image});
    await nueva.save();
    
    res.status(201).send('Pelicula agregada correctamente');

  } catch (error) {
    console.log(error);
  }

});

router.get('/search', async(req, res) => {
  const {name} = req.query;
  
  try {
    if (typeof name !== 'string') {
      return res.status(400).json({ error: 'El parámetro de búsqueda debe ser una cadena' });
    }
    const formattedName = name.replace(/-/g, ' ');

    const words = formattedName.split(' ');
    const regex = new RegExp(words.join('|'), 'i');
    const movies = await Movies.find({ name: regex });

      res.json(movies);

    
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'Hubo un error'});
  }

})

router.delete('/', async (req, res) => {
  const { name, _id } = req.body;
  try {
    const movie = await Movies.findByIdAndDelete(_id); // Buscar y eliminar la película por su ID

    if (!movie) {
      return res.status(404).send('La película no se encontró');
    }

    res.status(200).send('Película eliminada correctamente');
  } catch (error) {
    console.error(error);
    res.status(401).json({error: 'Hubo un error en el servidor'});
  }
});

router.put('/', async(req, res) => {
  const {name, year, rating, image, descripcion} = req.body;
  const buscar = await Movies.findOneAndUpdate({name}, {name: name, year: year, rating: rating, image: image, descripcion});
  
  if(buscar.length == 0) {
    return res.status(500).json({error: 'Hubo un error'});
  }

  return res.status(201).send('Arreglado correctamente');

});


module.exports = router;
