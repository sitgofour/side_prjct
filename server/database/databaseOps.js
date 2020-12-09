const { Resource } = require('./Resource.js');
const { connectToDB } = require('./connect.js');
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


module.exports = {
    postNewResourceToDB: postNewResourceToDB
}