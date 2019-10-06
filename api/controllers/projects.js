const {createProjectInDatabase} = require("../models/projects");

function createProject(req, res){
    const {start_time, deadline, name, type} = req.query;
    createProjectInDatabase(name, type, start_time, deadline).then((data) => {
        res.send({
            message: {
                success: "Successfully created project!"
            }
        });
    }).catch((error) => {
        res.send({
            message: {
                error
            }
        })
    })
}


module.exports = {
    createProject
}