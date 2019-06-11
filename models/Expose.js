const mongoose = require('mongoose');
const ExposeSchema = mongoose.Schema({
    sender_name:{
        type: String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    message:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model("Expose",ExposeSchema);

