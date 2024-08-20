const Test = require('../models/testModel')
const data = require('../data')

const saveTest = async (req, res) => {
    const {total, correct, incorrect, attempt} = req.query;
    const score = (correct * 1) - (incorrect * 0.25)
    if(score < 0) score = 0;

    try {
        const newTest = new Test({
            total_question : total,
            correct,
            incorrect,
            attempt,
            score,
        })
        newTest.save();

        if(!newTest) return res.status(404).send({msg : "Error While saving to database"})

        return res.status(201).send({msg : "Saved Successfully", data : newTest}) 
    } catch (error) {

        return res.status(404).send({msg : "Error in Database"}) 
    }
}

const questionData = async (req, res) => {
    res.status(201).send({msg : "data sent", data : data})
}

module.exports = {saveTest, questionData}