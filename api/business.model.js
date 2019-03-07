const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  person_name: {
    type: String
  },
  person_lastname: {
    type: String
  },
  person_country: {
    type: String
  },
  person_city: {
    type: String
  },
  person_email: {
    type: String
  },
  person_phone : {
    type:Number
  },
  person_car_brand: {
    type: String
  },
  person_car_model : {
    type: String
  },
  question : {
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
