const {getUserFromDatabase, createUserInDatabase} = require("../models/users");

function getUser(req, res){
    getUserFromDatabase(req.query.uid).then((user) => {
        res.send({
            message: {
                ...user
            }
        });
    }).catch((error) => {
        res.send({
            message: {
                ...error
            }
        });
    });
}

function createUser(req, res){
    createUserInDatabase(req.query.name).then((success) => {
        res.send({
            message: {
                ...success
            }
        })
    }).catch((error) => {
        res.send({
            message: {
                ...error
            }
        });
    });
}

module.exports = {
    getUser,
    createUser
}