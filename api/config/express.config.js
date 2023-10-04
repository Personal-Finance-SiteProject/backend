const expressConfig = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const { service: { logs } } = require('../../config');
// const routes = require('../routes/index');
const error = require('../middlewares/error.middleware');

const app = expressConfig()
app.use(morgan(logs))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
app.use(helmet())
app.use(cors())

// app.use(routes)

// if error is not an instanceOf Api_errorLib, convert it.
app.use(error.converter)

// catch 404 and forward to error handler
app.use(error.notFound)

// error handler, send stacktrace only during development
app.use(error.handler)

module.exports = app
