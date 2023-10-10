const express = require('express');
const http= require('http');
const authMiddleware = require('../middlewares/auth.middleware');
const cors = require('cors');
const asyncify = require('express-asyncify');
const { socketDomains } = require('../../config');
const app = asyncify(express());

// const socketService = require('../socket/socket');
// const { Server: ServerSocket } = require('socket.io')
const server = http.createServer(app)
/** All Routes **/
const authRoute = require('./admin-users/auth.route');

// const ioSocket = new ServerSocket(server, {
//     cors: {
//         origin: socketDomains,
//         credentials: true,
//         methods: ['GET', 'POST']
//     },
// })

const router = express.Router();

router.use(cors());

router.use('/auth', authRoute);


router.use(authMiddleware);


// socketService(ioSocket).then(r => {console.log(r) })

module.exports = router;
