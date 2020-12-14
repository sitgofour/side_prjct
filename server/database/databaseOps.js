const { Resource } = require('./Resource.js');
const { connectToDB } = require('./connect.js');
const { get } = require('mongoose');
const DB = connectToDB();



async function postNewResourceToDB(resourceObj) {

    const { title, description, categories, resourceUrl, userRatings } = resourceObj;

// TODO //

    // get image with resourceUrl
    // const newImageUrl = fetchImageUrl(resourceUrl);

    // get iframe from youtube
    // const iframeData = fetchYoutubeIFrame(resourceUrl);

    const newResource = new Resource({
        title: title,
        description: description,
        categories: categories,
        resourceUrl: resourceUrl,
        imageUrl: "",
        userRatings: userRatings,
        reviewsList: [],
        searchTags: [],
        youTubeIframe: "",
        dateCreated: new Date()
      });

    newResource.save((err, newResource) => {
        if(err) {
            console.log(err);
        } else {
            console.log(newResource);
        }
    });
}

async function queryAllResources() {
    const records = await Resource.find({});
    return records;
}


module.exports = {
    postNewResourceToDB: postNewResourceToDB,
    queryAllResources: queryAllResources,
}