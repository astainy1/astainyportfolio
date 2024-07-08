//Declare global variables
const express = require('express');
const path = require('path');
const port = 5000;
const app = express();

//get request and response from express
app.use(express.static(path.join(__dirname, 'asset')));

app.get('/', (request, response) =>{
    response.sendFile(path.join(__dirname, 'asset', 'index.html'))
});

app.get('/projects', (request, response) =>{
    response.sendFile(path.join(__dirname, 'asset', 'projects.html'))
});

app.get('/services', (request, response) =>{
    response.sendFile(path.join(__dirname, 'asset', 'services.html'))
});

app.get('/about', (request, response) =>{
    response.sendFile(path.join(__dirname, 'asset', 'about.html'))
});

app.get('/contact', (request, response) =>{
    response.sendFile(path.join(__dirname, 'asset', 'contact.html'))
});

//Listen to port
app.listen(port, () => {
    console.log(`HTTP Response! Status: listening to port ${port}`)
});

