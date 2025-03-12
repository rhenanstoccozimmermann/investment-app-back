const express = require('express');
const cors = require('cors');

const loginRoute = require('./routes/loginRoute');
const accountsRoutes = require('./routes/accountsRoutes');

const app = express();

app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());

app.use('/login', loginRoute);
app.use('/accounts', accountsRoutes);

module.exports = app;
