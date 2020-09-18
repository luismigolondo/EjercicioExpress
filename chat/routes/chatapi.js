var express = require('express');
var router = express.Router();

const ws = require("../wslib");

/* GET api messages. */
router.get('/', function(req, res, next) {
  res.send(ws.messages);
});

module.exports = router;
