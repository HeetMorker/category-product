const mongoose = require('mongoose');

const db = async () => {
    await mongoose.connect(
        "mongodb+srv://heet:123@cluster0.ayaj1d4.mongodb.net/"
    );
    console.log("database connected.");
}

module.exports = db;