var express= require('express');
var router = express.Router();
var ticketCtrl = require('../controller/tickets');

router.get('/flights/:id/tickets/new' , ticketCtrl.new);
router.post('/flights/:id/tickets' , ticketCtrl.create);
router.post('/flights/:id' , ticketCtrl.addTicketToflight);
// router.post('/flights/:id/tickets/new' , ticketCtrl.addTicket)



module.exports = router