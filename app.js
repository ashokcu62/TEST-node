const express = require('express');
const app = express();
const port = 3000;

// Define the /home route
app.get('/home', (req, res) => {
  res.send('Hello');
});

// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});