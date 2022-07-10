const express = require('express');
const path = require('path');
const seed = require('../../scripts/seed');
const { db } = require('./db');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();

//parser middleware
app.use(bodyParser.json());

app.use('/api', require('./routes'));

//serve static files
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

// Send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

const syncAndSeed = async () => {
  await db.sync();
  seed();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

syncAndSeed(); //seed and start the server

module.exports = app;
