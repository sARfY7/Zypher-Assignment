const { Schema, model } = require("mongoose");

const ArtistSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        is_famous: Boolean
    },
    {
        timestamps: true
    }
);

module.exports = model("Artist", ArtistSchema);
