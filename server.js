const express = require('express');
const cors = require('cors');
const serveStatic = require("serve-static");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(serveStatic(__dirname + "/dist"));
const mainroute = require('./routes/cases');

app.use('/', mainroute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});