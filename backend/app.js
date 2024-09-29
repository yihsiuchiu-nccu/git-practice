require('dotenv').config()

const express = require('express');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).option('p', {
    alias: 'port',
    describe: 'Port to bind on',
    type: 'number',
    default: process.env.HTTP_PORT || 3000 ,
  }).argv;

const app = express();
const port = argv.p;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})