const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('./middleware/cors');
const response = require('./middleware/response');

const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors);
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(response);

app.use('/blog', blogRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
})

module.exports = app;