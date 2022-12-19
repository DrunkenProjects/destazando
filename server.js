const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const count = readFileSync('./count.txt', 'utf-8');
  console.log('count', count)

  const newCount = parseInt(count) + 1

  writeFileSync('./count.txt', newCount)

  
});

app.listen(5000, () => console.log('http://localhost:5000/'));