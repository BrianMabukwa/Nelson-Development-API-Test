const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ status: 'API is running' }));

app.post('/sort', (req, res) => {
  const { data } = req.body;
  if (typeof data !== 'string') return res.status(400).json({ error: 'Data must be a string' });
  res.json({ word: data.split('').sort() });
});

// Start server only when running locally
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;