const express = require('express');
const path = require('path')

const app = require('express')();

const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, ()=>console.log('app on port'+port))