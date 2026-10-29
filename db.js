const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB, {serverSelectionTimeoutMS: 5000});
        console.log("MongoDB connected");
    } catch (err) {
        console.log("DB connection failed: " + err.message);
    }
};
module.exports = connectDB;