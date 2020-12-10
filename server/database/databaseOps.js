const { Resource } = require('./Resource.js');
const { connectToDB } = require('./connect.js');
const { get } = require('mongoose');
const DB = connectToDB();



async function postNewResourceToDB(resourceObj) {

    const { title, link, description } = resourceObj;

    const newResource = new Resource({
        title: title,
        link: link,
        description: description,
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


async function getResourceFromDB() {
    const records = await Resource.find({});
    return records;
}


module.exports = {
    postNewResourceToDB: postNewResourceToDB,
    getResourceFromDB: getResourceFromDB,
}