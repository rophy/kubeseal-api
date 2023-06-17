const assert = require('assert');
const { exec } = require('node:child_process');
const express = require('express');

assert(process.env.SEALED_SECRETS_CERT, 'missing required env var SEALED_SECRETS_CERT');

const app = express();
const port = process.env.PORT || 3000;

app.get('/encrypt', (req, res) => {
  if (!req.query.v) return res.status(400).send("missing query key v");
  exec('kubeseal', (err, output) => {
    if (err) {
        console.error(err);
        res.send('error!');
        return;
    }
    console.log('Output: \n', output);
    res.send('Hello World!');
  });  
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
