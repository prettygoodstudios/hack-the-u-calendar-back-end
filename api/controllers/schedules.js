const {getSchedulesInDatabase, getMySchedulesInDatabase} = require("../models/schedules");

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

function getMySchedules(req, res){
    const {uid} = req.query;
    getMySchedulesInDatabase(uid).then((data) => {
        res.send({
            message: {
                schedule: data
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
    getSchedules,
    getMySchedules
}