const {createScheduleInDatabase} = require("./schedules");
const connection = require("../database/connection/index");

function createProjectInDatabase(name, type, start, deadline, uid){
    return new Promise((resolve, reject) => {
        createScheduleInDatabase(start, deadline).then((schedule) => {
            connection.query("INSERT INTO calendar_projects(name, type, schid, uid) VALUES(?, ?, ?, ?)", [name, type, schedule.insertId, uid], (error, results, fields) => {
                if(error){
                    reject(error);
                }else{
                    resolve(results)
                }
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

function getProjectsInDatabase(uid){
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM calendar_Projects WHERE uid = ? ", [uid], (error, results, fields) => {
            if(error){
                reject(error);
            }else{
                resolve(results);
            }
        });
    })
}

module.exports = {
    createProjectInDatabase,
    getProjectsInDatabase
}