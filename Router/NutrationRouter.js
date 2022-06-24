const express = require('express');
const nutrationController = require('../Controller/NutrationController');
const userController = require('../Controller/UserController')

const router = express.Router();

router.use(userController.authorize);

router.get('', nutrationController.getAll);
router.post('/create', nutrationController.checkPriceMiddleware, nutrationController.create);
router.get('/:id', nutrationController.getnutrationById);
router.put('/:id', nutrationController.updatenutrationById);
router.delete('/:id', nutrationController.deletenutrationById);

module.exports = router;