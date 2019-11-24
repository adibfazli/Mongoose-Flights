var express= require('express');
var router = express.Router();
var ticketCtrl = require('../controller/tickets');

router.get('/tickets/new' , ticketCtrl.new);
router.post('/tickets' , ticketCtrl.create);
router.post('/flights/:id/tickets' , ticketCtrl.addTicket)



module.exports = router