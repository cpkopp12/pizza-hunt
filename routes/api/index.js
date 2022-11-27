//DECLARATIONS: pizza routes, router --------------------------
const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

//SET ROUTER ---------------
router.use('/pizzas', pizzaRoutes);

//EXPORT ROUTER -----------------------
module.exports = router;