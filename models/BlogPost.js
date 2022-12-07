import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlogPostSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  body: String
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;