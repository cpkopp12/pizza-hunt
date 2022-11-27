//DECLARATIONS: mongoose schema + model ------------
const { Schema, model } = require('mongoose');

//COMMENT SCHEMA -----------------------------
const CommentSchema = new Schema({
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//COMENT MODEL --------------------------------
const Comment = model('Comment', CommentSchema);

//EXPORT MODEL ---------------------------------
module.exports = Comment;