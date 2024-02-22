require('dotenv').config();

const mongoose = require('mongoose');



// Replace the uri string with your connection string.
const uri = process.env.DATABASE_URL;

async function main() {
  await mongoose.connect(uri);
  console.log('Conexión exitosa a la base de datos');
}

main().catch(err => console.log(err));

  const moviesSchema = new mongoose.Schema ({
    name: String,
    year: String,
    rating: String,
    image: String
  });

  // Añadir a un modelo
  const Movies = mongoose.model('Movies', moviesSchema);

  // Exportar el modelo Movie para poder utilizarlo en otros archivos
  module.exports = Movies;


