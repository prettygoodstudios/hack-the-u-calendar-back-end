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

module.exports = {
    createScheduleInDatabase
}