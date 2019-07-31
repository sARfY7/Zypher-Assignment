const { Schema, model } = require("mongoose");

const SongSchema = new Schema(
    {
        title: String,
        album_name: String,
        genre: String,
        artist: { type: [Schema.Types.ObjectId], ref: "Artist" }
    },
    {
        timestamps: true
    }
);

module.exports = model("Song", SongSchema);
