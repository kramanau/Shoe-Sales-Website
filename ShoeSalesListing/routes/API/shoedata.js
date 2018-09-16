const express = require('express');
const router = express.Router();

const farfetch = require('../../models/farfetch');

router.get('/', (req, res) => {
  farfetch.find()
      .then(shoes => res.json(shoes));
});

module.exports = router;
