var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"status":-1,"msg":"Username Not exists"});
});

module.exports = router;
