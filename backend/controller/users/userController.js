const User = require("../../model/User")

const signUp = async (req, resp) => {
    console.log(req.body)
    try {
        let userInfo = {username: req.body.username, password: req.body.password, email: req.body.email }
        console.log(userInfo)
        let newUser = new User(userInfo)
        await newUser.save()
        resp.status(200).json({message: "User saved!"})
    } catch(error) {
        console.log(error)
        resp.status(400).json({message: "Bad request"})
    }
}

module.exports = {signUp};