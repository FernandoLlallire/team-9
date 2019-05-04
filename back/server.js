const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

const adminRoutes = require('./routes/adminRoutes');

app.use(morgan('tiny')); // loggin middleware
app.use(bodyParser.urlencoded({ extended: true })); // HTML submits
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(`${__dirname}/public`));

app.use('/admin', adminRoutes);

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// db.sync({ force: false }).then(() => {
  app.listen(3000, () => console.log('SERVER LISTENING AT PORT 3000'));
// });
