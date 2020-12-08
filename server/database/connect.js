const mongoose = require('mongoose');

//db connection
async function connectToDB() {    
    try {
        let connection = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connected to db!");
        console.log(connection);
        return connection;
    }
    catch(err) {
        return null;
        console.log(err);
    }
}

// const DB = connectToDb();

module.exports = {
    connectToDB: connectToDB
}