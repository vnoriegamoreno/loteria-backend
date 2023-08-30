const loteriaServices = require("../services");

exports.getCards = async (req, res) => {
  try {
    return res.status(200).send(await loteriaServices.getCards());
  } catch (err) {
    return res.status(500).send({ success: false, err });
  }
};

exports.addCard = async (req, res) => {};

exports.updateCard = async (req, res) => {};

exports.deleteCard = async (req, res) => {};
