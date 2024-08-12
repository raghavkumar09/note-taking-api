const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        if (conn) {
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        }
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;