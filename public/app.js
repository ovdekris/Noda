const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const PORT = 3500;

//Access for user
const users = require('./user');

//Create server
http.createServer(function (req, res){
    let url = req.url;

    switch (url){
        case '/':
            console.log("Main page");
            res.write('Main page');
            break;
    }
}).listen(3500);