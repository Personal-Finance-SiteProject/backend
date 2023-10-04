const http = require('http');
const { service, socketDomains} = require('../config');
const app = require('./config/express.config');
const server= http.createServer(app);
const { Server: ServerSocket } = require('socket.io');

const ioSocket = new ServerSocket(server, {
    cors: {
        origin: socketDomains,
        credentials: true,
        methods: ['GET', 'POST']
    }
})


server.listen(service.port, () => console.log(`server started on port ${service.port}`));
