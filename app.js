const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
