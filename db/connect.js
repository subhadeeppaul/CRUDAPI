const mongoose = require("mongoose");

uri= "mongodb+srv://root:root@cluster0.fzhxuov.mongodb.net/cluster0?retryWrites=true&w=majority";
const connectDB = (uri) => {
    //console.log("connect db");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    });
};

module.exports = connectDB;