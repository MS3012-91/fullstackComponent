const http = require('http');

const server = http.createServer(()=>{});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1'

server.listen(PORT, HOST, () => console.log(`Server is listen on port: ${PORT}, host: ${HOST}`)
);