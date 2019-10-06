const {createSubProjectInDatabase} = require("../models/subprojects");

function createSubProject(req, res){
    const {schid, name, pid} = req.query;
    createSubProjectInDatabase(schid, name, pid).then((data) => {
        res.send({
            message: {
                success: "Successfully created sub project!"
            }
        })
    }).catch((error) => {
        res.status(400);
        res.send({
            message: {
                error
            }
        })
    })
}

module.exports = {
    createSubProject
}