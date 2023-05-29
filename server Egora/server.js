const data = require('./data')

const express = require('express')
const app = express()
var cors = require('cors')
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(data.configData);
})

app.get('/lesson1-1', (req, res) => {
    res.send(data.data1_1); 
})

app.get('/lesson1-2', (req, res) => {
    res.send(data.data1_2); 
})

app.get('/lesson1-3', (req, res) => {
    res.send(data.data1_3); 
})

app.get('/lesson1-4', (req, res) => {
    res.send(data.data1_4); 
})

app.get('/lesson2-1', (req, res) => {
    res.send(data.data2_1); 
})

app.get('/lesson2-2', (req, res) => {
    res.send(data.data2_2); 
})

app.post('/registration', (req, res) => {
    console.log(req.body);
    const data = {
        success: true,
    };
    res.send(data);
})

app.post('/authorization', (req, res) => {
    const data = {
        success: true,
    };
    res.send(data);
})

app.post('/lesson1-2/answer', (req, res) => {
    console.log(req.body)
    const data = {
        success: true,
    };
    res.send(data);
})


app.listen(PORT, () => {
    console.log(`server is working on PORT ${PORT}`);
})