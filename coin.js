const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

Data = {"180001":'1',"180222":'3', "180232":'3432'};

app.post('/coins', (req, res) => {
    rollno = req.body['rollno'];
    res.json({ "coin": Data[rollno] });
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
