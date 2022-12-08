const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
  title: String,
  body: String,
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;



//! En mode ES6
// import mongoose from 'mongoose';
// import { Schema } from 'mongoose';

// const BlogPostSchema = new Schema({
//   title: String,
// });

// const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// export default BlogPost;
