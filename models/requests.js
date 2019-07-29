const mongoose = require('mongoose');

//Cleaner Detils Schema
let RequestSchema = mongoose.Schema({
    clientID:{
        type: String,
        required: true
    },
    clientName:{
        type: String,
        required: true
    },
    selectedCleaners:{
        type: Array,
        required: true
    },
    selectedCleanerIDs:{
        type: Array,
        required: true
    },
    postcode:{
        type: String,
        required: true
    },
    extraTasks:{
        type: Array,
        required: true
    },
    dateFirstClean:{
        type: Date,
        required: true
    },
    priority:{
        type: String
    },
    clientPhone:{
        type: Number,
        required: true
    },
    clientEmail:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    accessType:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: false,
        required: true
    },
    updated:{
        type: Date,
        default: Date.now
    }
});

let Requests = module.exports = mongoose.model('requests', RequestSchema);