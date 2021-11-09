const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name:{
      type:  String,
      require: true
    },
    email:{
      type: String,
    },
    phone:
    {
    type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    message:
    {
        type: String
    }
});

const Contact = mongoose.model('Contact',contactSchema);
module.exports=Contact;