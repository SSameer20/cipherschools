const mongoose = require('mongoose');


const testSchema = new mongoose.Schema({
    total_question : {
        type : Number,
        default : 10
    },
    attempt : {
        type : Number,
        required : true
    },
    correct : {
        type : Number,
        required : true
    },
    incorrect : {
        type : Number,
        required : true
    },
    score : {
        type : Number,
        required : true
    },
    video : {
        type : String,
        required : true
    }
}, {timestamps : true})

const Test = new mongoose.model('Test', testSchema);

module.exports = Test;