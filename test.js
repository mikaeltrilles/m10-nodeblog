import mongoose from 'mongoose';  // Importation de Mongoose
import BlogPost from './models/BlogPost.js';  // Importation du modèle BlogPost
mongoose.set('strictQuery', true);

// Connexion à Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/blogdb');

// Affichage erreur de connexion
mongoose.connection.on('error', (error) => {
  console.log(error);
});

// Affichage de la connexion
mongoose.connection.once('open', () => {
  console.log('Connecté à Mongoose');
});

// Création de l'article de blog
BlogPost.create({
  title: 'Mon premier article de blog via Mongoose...',
  body: "En fait créer un article de blog avec Mongoose n'est pas si compliqué... Si ?"
}, (error, blogpost) => {
  console.log(error, blogpost);
}
);