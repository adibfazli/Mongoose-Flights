var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    addTicketToflight,
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('tickets/new', {
            flight,
            title: "add ticket"
        })
    })
    // Ticket.find({}, function (err, ticket) {
    //     console.log(ticket)
    //     res.render('tickets/new', {
    //         title: 'Add Ticket',
    //         ticket
    //     });
    // });
}

function create(req, res) {
    req.body.flight = req.params.id
    Ticket.create(req.body, function (err, ticket) {
        // Flight.findById(req.params.id, function (err, flight) {
        res.redirect(`/flights/${req.params.id}`);
        // });
    });
}

function addTicketToflight(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.findById(req.body.flightId, function (err, ticket) {
            flight.addedTicket.push(ticket);
            console.log("hiiiiiiiiiiiiiiiiiiii", ticket)
            flight.save(function (err) {
                res.redirect(`/flights/${req.params.id}`);
            })
        });
    });
}