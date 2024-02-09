import mongoose from "mongoose";



var user_d = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
})



var schema = new mongoose.Schema({
    users: [user_d],
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true
      
    }
})
const bookdb = mongoose.model('bookdbM', schema)
export default bookdb;