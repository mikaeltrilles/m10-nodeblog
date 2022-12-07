import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const BlogPostSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  body: String
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

export default BlogPost;