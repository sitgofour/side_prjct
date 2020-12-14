const metascraper = require('metascraper')([
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-iframe')(),
    require('metascraper-title')(),
  ]);

const got = require('got')


async function getResourceMetaData(targetUrl) {
  const { body: html, url } = await got(targetUrl);
  const metadata = await metascraper({ html, url });
  console.log(metadata);

  // return resource
};


module.exports = {
    getResourceMetaData: getResourceMetaData
}


