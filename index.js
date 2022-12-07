// Description: This is the main file of the blog

// Importing the modules
const express = require('express');
const mongoose = require('mongoose');


mongoose.set('strictQuery', true);  // Pour éviter les erreurs de type "strictQuery"

// Connexion à la base de données
mongoose.connect(
  'mongodb://localhost:27017/blogdb', {
  useNewUrlParser: true,  // Pour éviter les erreurs de type "useNewUrlParser"
  useUnifiedTopology: true // Pour éviter les erreurs de type "useUnifiedTopology"
});
db = mongoose.connection; // Connexion à la base de données
db.on('error', console.error.bind(console, 'connection error:')); // Affichage des erreurs
db.once('open', function () {
  console.log("connecté à Mongoose")  // Affichage de la connexion
});

// Declaration of the variables
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 3000;

// Declaration of the static folder
app.use(express.static('public'));
app.set('view engine', 'ejs');


//TODO Declaration des views si le dossier est different de views
//TODO app.set('views', path.join(__dirname, 'views'));


// Rendu de views
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
// Listening to the port
app.listen(port, () => {
  console.log(`Blog listening at http://localhost:${port}`);
});