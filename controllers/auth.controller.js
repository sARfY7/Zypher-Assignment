const User = require("../models/user.model");

module.exports.postLogin = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username });
};
