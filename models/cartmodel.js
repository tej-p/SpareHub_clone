const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    refer : {type : String, required : true},
    prod_id : {type : mongoose.Schema.Types.ObjectId ,ref : "refer", required : true},
},{
    versionKey : false,
    timestamps : true
})
module.exports = mongoose.model("cart", cartSchema);

