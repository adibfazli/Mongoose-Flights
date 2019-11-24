var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var destinationSchema = new Schema ({
    airport: {
        type: String ,
        // enum: ['AUS', 'DAL', 'LAX' , 'SEA'],
    },
    arrival: {type : Date}
  } , {  timestamps: true
});


var flightSchema = new Schema({
    airline	: {
        type : String ,
        enum:['American' , 'Southwest' , 'United']
    } ,
    flightNo : {
        type : Number ,
        required : true ,
        min : 10 ,
        max : 9999 
    } ,
    departs :{
        type: Date,
    },
    airport: {
        type: String ,
        enum: ['AUS', 'DAL', 'LAX' , 'SEA'],
        default: "LAX"
    },
    destination: [destinationSchema] ,
    addedTicket: [{type: Schema.Types.ObjectId, ref: 'Tickets'}]
});

module.exports = mongoose.model('Flight', flightSchema);
