var Flight = require('../models/flight');

module.exports = {
    index ,
    new : newFlight ,
    create ,
    show
}

function index (req , res){
    Flight.find({} , function (err , flights) {
        res.render('flights/index' , {title: 'All Flights' , flights});
    });
}

function newFlight(req , res){
    res.render('flights/new', { title: 'Add Flight' });
}


function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.redirect('/flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }
  
  function show(req , res){
    Flight.findById(req.params.id , function(err , flight){
      res.render('flights/show' , {
        title:`Flight Number ${flight.flightNo}`,
        flight
      })
    })
  }

