const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    score: { type: Number, require: false },
    positionX: { type: Number, require: false },
    positionY: { type: Number, require: false },
    positionZ: { type: Number, require: false },
    scenes: { type: String, require: false }

})

const User = mongoose.model("User", userShema);
module.exports = { User }