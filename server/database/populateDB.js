const { postNewResourceToDB, getResourceFromDB } = require('./databaseOps.js');
const { resourcesList } = require('./resourcesList.js');


function writeResources(resources) {
    console.log("resources list:", resources);
    console.log("resources list first item:", resources[0]);
}



function populateDB(resources) {

    for(let resource of resources) {
        try {
            postNewResourceToDB(resource);
            console.log("resource posted!");
        }
        catch(e) {
            console.log("that addition did not go through", e);
        }
    }
}

function runPopulate() {
    populateDB(resourcesList);
}


module.exports = {
    populateDB: populateDB,
    runPopulate: runPopulate,
    writeResources: writeResources
}