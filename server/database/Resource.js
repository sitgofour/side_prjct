const mongoose = require('mongoose');

//db schema/model definition
const Schema = mongoose.Schema;
const resourceSchema = new Schema({
    user: String,
    post: String,
    date: String,
    voteTotal: Number,
});

// generate Resource model object
const Resource = new mongoose.model("Resource", resourceSchema);

module.exports = {
    Resource: Resource
}