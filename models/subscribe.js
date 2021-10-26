const mongoose = require('mongoose');
const subscribeSchema = new mongoose.Schema({
    email:{
      type:  String,
      require: true,
      unique:true
    },
    
    date: {
      type: Date,
      default: Date.now,
    }
    

})

const Subscribe = mongoose.model('Subscribe',subscribeSchema);
module.exports=Subscribe;