//DECLARATIONS: model object ----------------
const { Pizza, Comment } = require('../models');

//COMMENT CONTROLLER ===========================
const commentController = {
    //add comment
    addComment({ params, body }, res) {
        console.log(body);
        Comment.create(body)
            .then(({ _id }) => {
                return Pizza.findOneAndUpdate(
                    { _id: params.pizzaId },
                    { $push: { comments: _id }},
                    { new: true }
                )
            })
            .then(dbPizzaData => {
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No pizza found with this id.'});
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.json(err));
    },
    //remove comment
    removeComment({ params }, res) {
        Comment.findOneAndDelete({ _id: params.commentId })
            .then(deletedComment => {
                if(!deletedComment) {
                    return res.status(404).json({ message: 'No comment with this id' });
                }
                return Pizza.findOneAndUpdate(
                    { _id: params.pizzaId },
                    { $pull: { comments: params.commentId } },
                    { new: true }
                );
            })
            .then(dbPizzaData => {
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No pizza found with this id!' });
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.json(err));
    }
};


//EXPORT CONTROLLER ---------------------------
module.exports = commentController;