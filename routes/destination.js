var express = require('express');
var router = express.Router();
var destinationCtrl = require('../controller/destination')

router.post('/flights/:id/destination' , destinationCtrl.create)


module.exports = router;
