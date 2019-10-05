

function getUser(req, res){
    res.send({
        message: {
            uid: req.get('uid') || 389402,
            name: "John Doe",
            email: "user@user.com"
        }
    });
}


module.exports = {
    getUser
}