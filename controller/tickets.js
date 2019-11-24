var Flight = require('../models/flight')
var Ticket = require('../models/ticket')

module.exports = {
    new : newTicket ,
    create ,
    addTicket ,
}

function newTicket (req , res){
    Ticket.find({} , function(err , ticket){
        console.log(ticket)
        res.render('tickets/new', {
            title : 'Add Ticket' ,
            ticket
        });
    });
}

function create(req , res){
    Ticket.create(req.body , function(err , ticket){
        res.redirect('tickets/new')
    });
}

function addTicket(req , res){

}