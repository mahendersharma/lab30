const mongoose = require('mongoose');
const Review = require('./review')
const blogSchema = new mongoose.Schema({
    name:{
      type:  String,
      require: true
    },
    category:{
      type: String,
    },
    img:
    {
    type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    desc:
    {
        type: String
    },
    reviews: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref:'Review'
      }
  ]

});

const Blog = mongoose.model('Blog',blogSchema);
module.exports=Blog;