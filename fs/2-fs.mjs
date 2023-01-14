'use strict';

import http from 'node:http';

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Length', length);
    res.setHeader('Content-Type', 'text/html');
    res.setEncoding('utf-8');
    res.statusCode = 200;
    const ip = res.socket.remoteAddress;
    const port = res.socket.remotePort;
    res.end(`<p style="margin: 100px;">Ваш IP: <b>${ip}</b><br>Ваш порт:<b>${port}</b>`);
});

server.listen(8080);
