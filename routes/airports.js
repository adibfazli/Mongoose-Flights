var express = require('express');
var router = express.Router();
var airportCtrl = require('../controller/flights')

router.post('/flights/:id/airports' , airportCtrl.airports)


module.exports = router;
