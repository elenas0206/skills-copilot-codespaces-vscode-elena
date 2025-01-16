// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create comments array
const comments = [
    {id: 1, username: 'Alice', comment: 'Hi there!'},
    {id: 2, username: 'Bob', comment: 'Hello!'},
        {id: 3, username: 'Charlie', comment: 'How are you?'}
    ];