import express from 'express';

const router = express.Router();
const client = require('./../models/client.js').client;
const dbName = 'demo1';

router.post('/add', (req, res) => {
  var json = req.body.content;
  client.connect((err) => {
    const db = client.db(dbName);
    db.collection('babies').insertOne(json, function (error, result) {
      if (error) {
        console.log('insert database faile');
      }
      console.log('insert database successfully');
      client.close();
    });
  });
});
