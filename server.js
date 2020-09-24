const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const port = process.env.PORT || 9983;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); 

 app.get('/api/hello', (req, res) => {
     res.send({ meesage: 'Hello Scarlet'});
 });

 app.listen(port, () => console.log(`Listening on port ${port}`));