var Flight = require('../models/flight')

module.exports = {
    create
  };

  function create(req , res){
    Flight.findById(req.params.id , function(err , flight){
        fight.push(req.body)
        flight.save(function(err){
            res.redirect(`flights/${flight._id}`)
        })
    })
  }