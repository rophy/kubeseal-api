const { exec } = require('node:child_process');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
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
