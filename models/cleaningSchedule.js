const mongoose = require('mongoose');

//Cleaner Detils Schema
let CleaningScheduleSchema = mongoose.Schema({
    clientID:{
        type: String,
        required: true
    },
    clientName:{
        type: String,
        required: true
    },
    cleanerID:{
        type: String,
        required: true
    },
    cleanerName:{
        type: String,
        //required: true
    },
    dateFirstClean:{
        type: Date
    },
    lastClean:[
        {
            cleanStatus:{
                type: Boolean,
                default: false
            },
            paidStatus:{
                type:  Boolean,
                default: false
            },
            requestStatus:{
                type: Boolean
            },
            lastCleanDate:{
                type: Date
            }
        }
    ],
    currentClean:[
        {
            cleanStatus:{
                type: Boolean,
                default: false
            },
            paidStatus:{
                type:  Boolean,
                default: false
            },
            requestStatus:{
                type: Boolean
            },
            currentCleanDate:{
                type: Date
            },
            nextCleanDate:{
                type: Date
            },
            increment:{
                type:Number
            }
        }
    ],
    cleanerIncome:{
        type: Number
    },
    extraTasks:{
        type: Array
    },
    totalHours:{
        type: Number
    },
    totalCharge:{
        type: Number
    },
    updated:{
        type: Date,
        default: Date.now
    }
});

let CleaningSchedule = module.exports = mongoose.model('cleaningSchedule', CleaningScheduleSchema);