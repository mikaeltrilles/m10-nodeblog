const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb://localhost:27017/blogdb');
BlogPost.create({
  title: 'Mon premier article de blog via Mongoose...',
  body: 'En fait créer un article de blog avec Mongoose n\'est pas si compliqué... Si ?'
}, (error, blogpost) => { console.log(error, blogpost) });