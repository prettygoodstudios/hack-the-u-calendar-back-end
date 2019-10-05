const connection = require("../database/connection/index.js");

const getUserFromDatabase = (uid) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM calendar_users WHERE uid = ?', [uid], (error, results, fields) => {
            if(error || !results){
                reject({
                    error
                });
            }else{
                if(results.length > 0){
                    resolve(results[0]);
                }else{
                    reject({
                        error: "User not found."
                    });
                }
            }
        });
    });
}

const createUserInDatabase = (name) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO calendar_users (name) VALUES(?)', [name], (error, results, fields) => {
            if(error || !results){
                reject({
                    error
                });
            }else{
                resolve({
                    success: "Created User!"
                });
            }
        });
    });
}

module.exports = {
    getUserFromDatabase,
    createUserInDatabase
}