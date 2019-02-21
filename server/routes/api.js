const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db = "mongodb://testDB1:pwdtestdb1@ds147125.mlab.com:47125/firstdb"

mongoose.connect(db, err => {
    if(err) {
        console.error('Error!', + err)
    } else {
        console.log('connected to mongodb')
    }
});

router.get('/', (req, res) => {
    res.send('From API route')
})

module.exports = router