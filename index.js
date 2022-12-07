// Description: This is the main file of the blog

// Importing the modules
const express = require('express');

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