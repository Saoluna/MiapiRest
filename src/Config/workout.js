const mongoose=require('mongoose'); 
const Schema = mongoose.Schema;
const squemaCocteles= new Schema({
    
    Name: String,
    liqueur: String,
    Origin: String,
    Type: String,
    img: String
})

module.exports = mongoose.model('Cocteles', squemaCocteles)