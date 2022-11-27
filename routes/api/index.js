//DECLARATIONS: pizza routes, router --------------------------
const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes');

//SET ROUTER ---------------
router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

//EXPORT ROUTER -----------------------
module.exports = router;