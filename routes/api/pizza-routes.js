//DECLARATIONS: router, pizza controller--------------------------
const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

//ROUTES: /api/pizzas -----------------------
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

//ROUTES: /api/pizzas/:id ---------------------
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

//EXPORT ROUTER ---------------------------------
module.exports = router;

