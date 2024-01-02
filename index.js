const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {  
//     res.statusCode = 200;  
//     res.setHeader('Content-Type', 'text/plain');  
//     res.end('Hello World!\n');
// });
const server = http.createServer((req, res) => {  
    // res.statusCode = 200;  
    console.log(req.url);

    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write('<h1 style="color: red">Hello World!</h1>');  
        res.write('<p>I wonder what else we can send...</p>');  
        res.end();
      } else if (req.url === "/Goodbye") {
        res.status = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<h1> Thank you for visiting, goodbye. </h1>");
        res.end();
}
});

server.listen(port, hostname, () => {  
    console.log(`SServer running at http://${hostname}:${port}`);
});


