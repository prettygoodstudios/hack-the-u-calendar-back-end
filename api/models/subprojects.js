const connection = require("../database/connection/index");

function createSubProjectInDatabase(schid, name, pid){
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO calendar_sub_projects(schid, name, pid) VALUES(?, ?, ?)", [schid, name, pid], (error, results, fields) => {
            if(error){
                reject(error);
            }else{
                resolve(results);
            }
        });
    });
}

module.exports = {
    createSubProjectInDatabase
}