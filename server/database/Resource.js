const mongoose = require('mongoose');



//db schema/model definition
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    title: String,
    description: String,
    categories: Array,
    resourceUrl: String,
    imageUrl: String,
    userRatings: Array,
    reviewsList: Array,
    searchTags: Array,
    youTubeIframe: String,
    dateCreated: Date,
});

// generate Resource model object
const Resource = new mongoose.model("Resource", resourceSchema);


module.exports = {
    Resource: Resource
}