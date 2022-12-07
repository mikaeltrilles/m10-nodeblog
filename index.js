// Fichier principal du serveur Node de l'application, déclaration du 'path' et du 'port' du serveur
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Routes des fichiers statiques dans le dossier "public"
app.use(express.static(__dirname + '/public'));


// Ecoute du serveur sur le port 3000
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
})
