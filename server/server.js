const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');


// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get('/pageLoad', function (req, res) {
  res.send('Hello World')
});

app.post('/newResource', function (req, res) {
    console.log(req.body);
    res.send('got the new resource!');
})
 
app.listen(8000, () => {
    console.log('server listening on port 3000');
});
