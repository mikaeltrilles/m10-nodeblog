import mongoose from 'mongoose';
import BlogPost from './models/BlogPost.js';
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/blogdb');

// Affichage erreur de connexion
mongoose.connection.on('error', (error) => {
  console.log(error);
});

// Affichage de la connexion
mongoose.connection.once('open', () => {
  console.log('Connecté à Mongoose');
});


BlogPost.create({
  title: 'Mon premier article de blog via Mongoose...',
  body: "En fait créer un article de blog avec Mongoose n'est pas si compliqué... Si ?"
}, (error, blogpost) => {
  console.log(error, blogpost);
}
);