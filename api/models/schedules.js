const connection = require("../database/connection/index");


function createScheduleInDatabase(start, deadline){
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO calendar_schedules (start_time, deadline) VALUES(?, ?)', [start, deadline], (error, results, fields) => {
            if(error){
                reject(error);
            }else{
                resolve(results);
            }
        });
    });
}

function getSchedulesInDatabase(){
    return new Promise((resolve, reject) => {
        connection.query("SELECT cs.*, cp.* FROM calendar_schedules cs LEFT JOIN calendar_projects cp ON cs.sid = cp.schid", (error, results, fields) => {
            if(error){
                reject(error);
            }else{
                resolve(results);
            }
        });
    });
}

function getMySchedulesInDatabase(uid){
    return new Promise((resolve, reject) => {
        connection.query("SELECT cs.*, cp.* FROM calendar_schedules cs LEFT JOIN calendar_projects cp ON cs.sid = cp.schid WHERE cp.uid = ?", [uid], (error, results, fields) => {
            if(error){
                reject(error);
            }else{
                resolve(results);
            }
        });
    });
}

module.exports = {
    createScheduleInDatabase,
    getSchedulesInDatabase,
    getMySchedulesInDatabase
}