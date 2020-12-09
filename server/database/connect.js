const mongoose = require('mongoose');



//db connection
async function connectToDB() {    
    try {
        let connection = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connected to db!");
        return connection;
    }
    catch(err) {
        return null;
        console.log(err);
    }
}


module.exports = {
    connectToDB: connectToDB
}