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

function getProjectInDatabase(pid){
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM calendar_Projects WHERE pid = ? ", [pid], (error, results, fields) => {
            if(error){
                reject(error);
            }else{
                resolve(results[0]);
            }
        });
    })
}

function deleteProjectInDatabase(uid, pid){
    return new Promise((resolve, reject) => {
        getProjectInDatabase(pid).then((project) => {
            if(project && project.uid == uid){
                connection.query("DELETE FROM calendar_projects WHERE pid = ?", [pid], (error, results, fields) => {
                    if(error){
                        reject(error);
                    }else{
                        connection.query("DELETE FROM calendar_projects WHERE ISNULL(pid)", (error, results, fields) => {
                            if(error){
                                reject(error);
                            }else{
                                resolve("Successfully deleted project!");
                            }
                        });
                    }
                });
            }else if(project){
                reject("You do not have permission to delete this project.");
            }else{
                reject("Project not found.");
            }
        });
    });
}

function updateProjectInDatabase(pid, uid, name, type, start_time, deadline){
    return new Promise((resolve, reject) => {
        getProjectInDatabase(pid).then((project) => {
            if(project && project.uid == uid){
                connection.query("UPDATE calendar_schedules SET start_time = ?, deadline = ? WHERE pid = ? ", [start_time, deadline, pid], (error, results, fields) => {
                    if(error){
                        reject(error);
                    }else{
                        connection.query("UPDATE calendar_projects SET name = ?, type = ? WHERE pid = ?", [name, type, pid], (error, results, fields) => {
                            if(error){
                                reject(error);
                            }else{
                                resolve(results);
                            }
                        });
                    }
                });
            }else if(project){
                reject("You do not have permission to delete this project.");
            }else{
                reject("Project not found.");
            }
        });
    });
}

module.exports = {
    createProjectInDatabase,
    getProjectsInDatabase,
    deleteProjectInDatabase,
    updateProjectInDatabase
}