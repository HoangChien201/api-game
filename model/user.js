const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
    email: {
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    }
    
})

const User = mongoose.model("User", userShema);
module.exports = { User }