// Description: This is the main file of the blog

// Importing the modules
const express = require('express');

// Declaration of the variables
const path = require('path');
const app = express();
const port = 3000;

// Declaration of the static folder
app.use(express.static('public'));

// Declaration of the routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
})
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/about.html'));
})
app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
})
app.get('/post', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/post.html'));
})

// Listening to the port
app.listen(port, () => {
  console.log(`Blog listening at http://localhost:${port}`);
});