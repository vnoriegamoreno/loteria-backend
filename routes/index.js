const express = require("express");
const loteriaController = require("../controllers");

const router = express.Router();

router.get("/", loteriaController.getCards);
router.get("/:id", loteriaController.getCard);
router.post("/", loteriaController.addCard);
router.put("/:id", loteriaController.updateCard);
router.delete("/:id", loteriaController.deleteCard);
router.post("/auth", loteriaController.auth);

module.exports = router;
