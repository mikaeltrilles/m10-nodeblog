const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb://localhost:27017/blogdb');
mongoose.set('strictQuery', true);
BlogPost.create({
  title: 'Mon deuxième article de blog via Mongoose...',
  body: 'En fait créer un article de blog avec Mongoose n\'est pas si compliqué... Si ?'
}, (error, blogpost) => { console.log(error, blogpost) });