const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const cors = require('cors');
const { socketDomains } = require('../../config');

const app = express();
const socketService = require('../socket/socket');
const { Server: ServerSocket } = require('socket.io')
const http = require("http");
const server = http.createServer(app)



/** All Routes **/
const authRoute = require('./admin-users/auth.route');
const categoryExpenseRoute = require('./category-expenses/category-expense.route')
const expenseRoute = require('./expenses/expense.route')




const ioSocket = new ServerSocket(server, {
    cors: {
        origin: socketDomains,
        credentials: true,
        methods: ['GET', 'POST']
    },
})


const router = express.Router();

router.use(cors());
router.use('/auth', authRoute);

router.use(authMiddleware);
router.use('/expenses', expenseRoute);
router.use('/category-expense', categoryExpenseRoute);




socketService(ioSocket).then(r => {console.log(r) })

module.exports = router;
