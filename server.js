const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const port = process.env.PORT || 9983;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/128/128/any',
            'name': '이승찬',
            'birthday': '960208',
            'gender': '남자',
            'job': '취준생'
            },
            {
            'id': 2,
            'image': 'https://placeimg.com/128/129/any',
            'name': '신영진',
            'birthday': '961212',
            'gender': '남자',
            'job': '회사원'
            }
    ]);
});

 app.listen(port, () => console.log(`Listening on port ${port}`));