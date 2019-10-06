const {createProjectInDatabase, getProjectsInDatabase, deleteProjectInDatabase} = require("../models/projects");

function createProject(req, res){
    const {start_time, deadline, name, type, uid} = req.query;
    createProjectInDatabase(name, type, start_time, deadline, uid).then((data) => {
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
    const {uid} = req.query;
    getProjectsInDatabase(uid).then((projects) => {
        res.send({
            message: {
                projects
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

function deleteProject(req, res){
    const {uid, pid} = req.query;
    deleteProjectInDatabase(uid, pid).then((success) => {
        res.send({
            message: {
                success
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
    createProject,
    getProjects,
    deleteProject
}