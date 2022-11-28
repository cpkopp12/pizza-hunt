//DECLARATIONS: router, comment controller -------------
const router = require('express').Router();
const { 
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

//ROUTES: /api/comments/:pizzaId ===========
router.route('/:pizzaId')
    .post(addComment);
//ROUTES: /api/comments/:pizzaId/:commentId =============
router.route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);
//ROUTES: /api/comments/:pizzaId/:commentId/:replyId ===========
router.route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);
//EXPORT router --------------------- 
module.exports = router;