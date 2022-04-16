var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/test.html'));
  //__dirname : It will resolve to your project folder.
});

module.exports = router;
