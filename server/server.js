const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
 
app.get('/pageLoad', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, () => {
    console.log('server listening on port 3000');
});
