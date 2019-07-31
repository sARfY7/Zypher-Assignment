const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        username: String,
        password: String
    },
    {
        timestamps: true
    }
);

module.exports = model("User", UserSchema);
