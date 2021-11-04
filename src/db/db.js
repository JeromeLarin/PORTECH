const { uri } = require('../configs/user.config')
const mongoose = require('mongoose')

const connectDb = mongoose.connect(uri, (err) => { 
    if(err){
        console.log(err);
    }
    else {
        console.log('connected to Db');
    }
})

module.exports = connectDb