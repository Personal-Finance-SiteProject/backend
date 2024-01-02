const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');

/** All Routes **/
const authRoute = require('./admin-users/auth.route');
const categoryExpenseRoute = require('./category-expenses/category-expense.route')
const expenseRoute = require('./expenses/expense.route')

const router = express.Router();

router.use('/auth', authRoute);
router.use(authMiddleware);
router.use('/expense', expenseRoute);
router.use('/category-expense', categoryExpenseRoute);




// socketService(ioSocket).then(r => {console.log(r) })

module.exports = router;
