//DECLARATIONS: router, comment controller -------------
const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

//ROUTES: /api/comments/:pizzaId ===========
router.route('/:pizzaId')
    .post(addComment);
//ROUTES: /api/comments/:pizzaId/:commentId =============
router.route('/:pizzaId/:commentId')
    .delete(removeComment);
//EXPORT router --------------------- 
module.exports = router;