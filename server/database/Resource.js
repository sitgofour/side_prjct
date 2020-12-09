const mongoose = require('mongoose');



//db schema/model definition
const Schema = mongoose.Schema;
const resourceSchema = new Schema({
    title: String,
    link: String,
    description: String,
    dateCreated: Date,
});

// generate Resource model object
const Resource = new mongoose.model("Resource", resourceSchema);


module.exports = {
    Resource: Resource
}