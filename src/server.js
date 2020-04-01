const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const posts = [
  { title: 'Google', link: 'https://www.google.com' },
  { title: 'Facebook', link: 'https://www.facebook.com' },
  { title: 'Slack', link: 'https://slack.com' }
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.put('/api/posts', (req, res) => {
  posts.push(req.body);
  res.end();
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
