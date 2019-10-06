const {createProjectInDatabase, getProjectsInDatabase} = require("../models/projects");

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

function getProjects(req, res){
    getProjectsInDatabase().then((projects) => {
        res.send({
            message: {
                ...projects
            }
        });
    }).catch((error) => {
        res.send({
            message: {
                error: "Could not retrieve projects."
            }
        });
    });
}


module.exports = {
    createProject,
    getProjects
}