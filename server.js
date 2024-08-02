const express = require('express');
const path = require('path');

console.log('Index Path:', path.resolve(__dirname, 'client/src/js/index.js'));
console.log('Template Path:', path.resolve(__dirname, 'client/src/index.html'));
console.log('SW Path:', path.resolve(__dirname, 'client/src/src-sw.js'));

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse URL-encoded data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Fallback route to serve index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Route setup (assuming htmlRoutes.js is correctly configured)
require('./server/routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});