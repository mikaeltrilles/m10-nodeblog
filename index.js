// Importation des modules
const express = require('express');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

// Pour éviter les erreurs de type "strictQuery"
mongoose.set('strictQuery', true); 

// Connexion à la base de données
mongoose.connect(
  'mongodb://localhost:27017/blogdb', {
    useNewUrlParser: true,  // Pour éviter les erreurs de type "useNewUrlParser" en console
    useUnifiedTopology: true // Pour éviter les erreurs de type "useUnifiedTopology" en console
});

// Connexion à la base de données
db = mongoose.connection;

// Affichage des erreurs
db.on('error', console.error.bind(console, 'connection error:'));

// Affichage de la connexion réussie
db.once('open', function () {
  console.log("connecté à Mongoose")
});

// Declaration des variables
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 3000;

// Declaration du dossier statique public
app.use(express.static('public'));
app.use(express.json());  // Fait de la requete un objet json
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));  


//~ Declaration des views si le dossier est different de views
//~ app.set('views', path.join(__dirname, 'views'));


// Rendu dynamique de views en fonction de l'url
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/post/new', (req, res) => {
  res.render('create');
});

// Sauvegarde du formulaire dans la base de données
app.post('/post', async (req, res) => {
  // Recupération des valeurs des champs du formulaire
  await BlogPost.create({
    title: req.body.titre,
    body: req.body.content,
  }, (error, blogpost) => {
    res.redirect('/');
  }
  );
  console.log(req.body);
});





// Ecoute du port
app.listen(port, () => {
  console.log(`Blog listening at http://localhost:${port}`);
});