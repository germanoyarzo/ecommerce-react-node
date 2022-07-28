import express from 'express';
import User from './models/User';
import users from './dataUser/users.js';

const ImportData = express.Router()

ImportData.post("/user", async (req,res) =>{
    await User.Remove({})
    const importUser = await Usser.insertMany(users)
    res.send({importUser})
})

export default ImportData;