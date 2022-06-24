const express = require('express');
const exerciseController = require('../Controller/ExerciseController');
const userController = require('../Controller/UserController')

const router = express.Router();

router.use(userController.authorize);

router.get('', exerciseController.getAll)
router.post('/create', exerciseController.checkPriceMiddleware, exerciseController.create);
router.get('/:id', exerciseController.getProductById);
router.put('/:id', exerciseController.updateExerciseById);
router.delete('/:id', productController.deleteExerciseById)

module.exports = router;