const express = require('express');
const loteriaController = require('../controllers');

const router = express.Router();

router.get('/', loteriaController.getCards);
router.post('/', loteriaController.addCard);
router.put('/', loteriaController.updateCard);
router.delete('/:id'), loteriaController.deleteCard);

module.exports = router;
