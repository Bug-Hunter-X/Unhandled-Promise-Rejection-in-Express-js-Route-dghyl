const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error'); // Send error response
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function doSomethingAsync() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  // Return a value or a promise
}