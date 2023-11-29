const mongoose = require("mongoose");
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userShema = new mongoose.Schema({
    
    email: {
        type: String,
        unique:true,
        require: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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