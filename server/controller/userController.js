const User = require('../models/userModel');

const createUser = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const findUser = await User.findOne({ email });

        if (!findUser) {
            const newUser = new User({
                username,
                email,
                password
            });

            await newUser.save();

            return res.status(201).send({ msg: "User Created Successfully" });
        }

        return res.status(409).send({ msg: "User Already Exists" });

    } catch (error) {
        return res.status(500).send({ msg: "Error in Database" });
    }
};

const createAdmin = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const findAdmin = await User.findOne({ email });

        if (!findAdmin) {
            const newAdmin = new User({
                username,
                email,
                password,
                admin : true
            });

            await newAdmin.save();

            return res.status(201).send({ msg: "Admin Created Successfully" });
        }

        return res.status(409).send({ msg: "Admin Already Exists" });

    } catch (error) {
        return res.status(500).send({ msg: "Error in Database" });
    }
};

const loginAdmin = async(req, res) => {
    const {email, password} = req.body;

    try {
        const findAdmin = await User.findOne({ email });
        if (!findAdmin)  return res.status(404).send({msg : "Admin not Found"})
        if(findAdmin.password === password && findAdmin.admin === true) return res.status(201).send({msg : "Admin logged successfully", data : findAdmin})
        return res.status(404).send({msg : "wrong credentials"})

    } catch (error) {
        return res.status(404).send({msg : "Error in Database"})
    }

}

const loginUser = async(req, res) => {
    const {email, password} = req.body;

    try {
        const findUser = await User.findOne({ email });
        if (!findUser)  return res.status(404).send({msg : "User not Found"})
        if(findUser.password === password) return res.status(201).send({msg : "user logged successfully", data : findUser})
        return res.status(404).send({msg : "wrong credentials"})

    } catch (error) {
        return res.status(404).send({msg : "Error in Database"})
    }

}

module.exports = { createUser, loginUser,loginAdmin, createAdmin };
