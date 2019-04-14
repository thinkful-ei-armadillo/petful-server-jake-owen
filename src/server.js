const express = require('express');
const cors = require('cors');
const DogRouter = require('./dog-router');
const CatRouter = require('./cat-router');
const userRouter = require('./user-router');
const CLIENT_ORIGIN = require('./config')

const app = express();
app.use(cors({ origin: CLIENT_ORIGIN }));

app.use('/api/cat', CatRouter);
app.use('/api/dog', DogRouter);
app.use('/api/user', userRouter);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});
// Catch-all 404
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak

app.listen(8080, () => {
  console.log('Serving on 8080');
});
