const express = require('express');

const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

const app = express();
db.sequelize.sync();

// 라우터 분리
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);

app.listen(8080, () => {
  console.log('server is running on localhost:8080');
});
