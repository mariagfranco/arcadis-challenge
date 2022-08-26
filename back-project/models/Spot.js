const mongoose = require('mongoose');

const Spot = mongoose.model('Spot', {
    name: String,
    coords: {
        coordX: Number,
        coordY: Number 
    },
    params: [{
        paramName: String,
        value: Number,
        date: String,
        unity: String,
        limit: String
    }]
})


module.exports = Spot;