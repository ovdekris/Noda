const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3500;

// mimeTypes
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.pdf': 'application/pdf',
    '.mp4': 'video/mp4',
    '.mp3': 'audio/mpeg',
    '.json': 'application/json'
};

// function static file
function staticFile(res, filePath, ext){
    res.setHeader('Content-Type', mimeTypes[ext]);
    fs.readFile('' + filePath, (error, data) =>{
        if (error) {
            res.statusCode = 404;
            res.end();
        } else {
            res.end(data);
        }
    })
}

// Create server
http.createServer(function (req, res){
    let url = req.url;
    switch (url){
        case '/':
            console.log("About page");
            staticFile(res, './html/main.html', '.html');
            break;
        case '/contact':
            console.log("Contact page")
            staticFile(res, './html/contact.html', '.html');
            break;
        default:
            const extname = String(path.extname(url)).toLocaleLowerCase();
            if(extname in mimeTypes) staticFile(res, url, extname);
            else {
                res.statusCode = 404;
                res.end();
            }
    }
}).listen(PORT);
