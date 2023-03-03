const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: { maxAge: 900000 }, //Idle logout of 15 minutes
  rolling: true,
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  })
};

app.use(session(sess));