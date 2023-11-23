const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
    email: {
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    score: { type: Number },
    positionX: { type: Number},
    positionY: { type: Number },
    positionZ: { type: Number },
    scences:{type:String}
    
})

const User = mongoose.model("User", userShema);
module.exports = { User }