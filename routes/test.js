const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();



router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/test.html'));
    //__dirname : It will resolve to your project folder.
  });