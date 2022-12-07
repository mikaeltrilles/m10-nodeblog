// Fichier principal du serveur Node de l'application, déclaration du 'path' et du 'port' du serveur
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Routes des fichiers statiques dans le dossier "public"
app.use(express.static(__dirname + '/public'));




// Routes des pages dynamiques dans le dossier "pages"
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'about.html'));
})
app.get('/about-json', (req, res) => {
  res. json ({
    content: "About page content !"
  });
})
app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'contact.html'));
})
app.get('/post', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'post.html'));
})





// Ecoute du serveur sur le port 3000
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
})
