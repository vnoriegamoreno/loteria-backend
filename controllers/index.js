const loteriaServices = require("../services");

exports.getCards = async (req, res) => {
  try {
    return res.status(200).send(await loteriaServices.getCards());
  } catch (err) {
    console.log("🚀 ~ file: index.js:7 ~ exports.getCards ~ err:", err);
    return res.status(500).send({ success: false, err: err.message });
  }
};

exports.getCard = async (req, res) => {
  try {
    if (!req.params.id) {
      return res
        .status(400)
        .send({ success: false, message: "Missing id parameter" });
    }
    return res.status(200).send({
      success: true,
      data: await loteriaServices.getCard({ id: req.params.id }),
    });
  } catch (err) {
    console.log("🚀 ~ file: index.js:26 ~ exports.getCard ~ err:", err);
    return res.status(500).send({ success: false, err: err.message });
  }
};

exports.addCard = async (req, res) => {
  try {
    if (!("name" in req.body && "card" in req.body)) {
      return res.status(400).send({
        success: false,
        message: "Missing loteria properties in payload",
      });
    }
    return res.status(201).send(await loteriaServices.createCard(req.body));
  } catch (err) {
    console.log("🚀 ~ file: index.js:41 ~ exports.addCard ~ err:", err);
    return res.status(500).send({ success: false, err: err.message });
  }
};

exports.updateCard = async (req, res) => {
  try {
    if (!Object.keys(req.body).length > 0) {
      return res.status(400).send({
        success: false,
        message: "Missing at least one property key to update",
      });
    }
    if (!req.params.id) {
      return res
        .status(400)
        .send({ success: false, message: "Missing id parameter" });
    }
    return res
      .status(200)
      .send(await loteriaServices.updateCard(req.params.id, req.body));
  } catch (err) {
    console.log("🚀 ~ file: index.js:61 ~ exports.updateCard ~ err:", err);
    return res.status(500).send({ success: false, err: err.message });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    if (!req.params.id) {
      return res
        .status(400)
        .send({ success: false, message: "Missing id parameter" });
    }
    return res
      .status(200)
      .send(await loteriaServices.deleteCard(req.params.id));
  } catch (err) {
    console.log("🚀 ~ file: index.js:77 ~ exports.deleteCard ~ err:", err);
    return res.status(500).send({ success: false, err: err.message });
  }
};

exports.auth = (req, res) => {
  try {
    if (!req.body.username && !req.body.password) {
      return res.status(400).send({
        success: false,
        message: "Missing username and password fields",
      });
    }
    const result = loteriaServices.auth(req.body);
    if (!result.success) {
      return res.status(400).send({
        success: false,
        message: result.message,
      });
    }
    return res.status(200).send(result);
  } catch (err) {
    console.log("🚀 ~ file: index.js:86 ~ exports.auth ~ err:", err);
    return res.status(500).send({ success: false, err: err.message });
  }
};
