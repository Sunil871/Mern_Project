const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/personal_web', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

// Move the server setup inside the connection.once callback
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');

  // Import and use the Express app
  const mainApp = require('./app');
  app.use(mainApp);

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});

connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
