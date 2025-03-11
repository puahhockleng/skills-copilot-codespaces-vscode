// Create web server that listens on port 3000
// Create a POST route for /comments that accepts a JSON body with the keys comment and username
// Store the comments in a global array
// Create a GET route for /comments that returns the comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  const username = req.body.username;
  comments.push({ comment, username });
  res.json({ message: 'Comment added' });
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});