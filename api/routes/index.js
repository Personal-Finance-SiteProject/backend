const express = require('express');
const http = require('http');
const cors = require('cors');
const asyncify = require('express-asyncify');
const app = asyncify(express());


/** All Routes **/
const authRoute = require('./admin-users/auth.route');



const router = express.Router();

router.use(cors());
router.use('/auth', authRoute);

module.exports = router;
