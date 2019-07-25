const mongo = require('mongoose');

const PostSchema = new mongo.Schema({
    author: String,
    place: String,
    description: String,
    hashtag: String,
    image: String,
    like:{
        type: Number,
        default: 0,
    }
},{
    timestamps: true,
});

module.exports = mongo.model('Post', PostSchema); 