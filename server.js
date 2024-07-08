const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, 'client')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route setup (assuming htmlRoutes.js is correctly configured)
require('./server/routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});