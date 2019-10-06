const {getSchedulesInDatabase} = require("../models/schedules");

function getSchedules(req, res){
    getSchedulesInDatabase().then((data) => {
        res.send({
            message: {
                ...data
            }
        });
    }).catch((error) => {
        res.send({
            message: {
                error
            }
        });
    });
}

module.exports = {
    getSchedules
}