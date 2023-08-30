const db = require("../models");

exports.getCards = () => {
  return db.Loteria.findAll()
    .then((cards) => ({
      success: true,
      data: cards,
    }))
    .catch((e) => {
      throw new Error(e);
    });
};

exports.getCard = (filter) => {
  return db.Loteria.findAll({ where: filter })
    .then((data) => data)
    .catch((e) => {
      throw new Error(e);
    });
};

exports.createCard = async (card) => {
  if (await exports.getCard({ name: card.name })) {
    throw new Error(
      `${card.name} already exist in the database, can not created duplicate users.`
    );
  }
  return db.Loteria.create(card)
    .then((c) => ({
      success: true,
      message: `${card.name} has been assigned to ${card.card} correctly`,
    }))
    .catch((e) => {
      throw new Error(e);
    });
};

exports.updateCard = async (id, card) => {
  const user = await db.Loteria.findByPk(id);
  if (!user) {
    throw new Error(`${card.name} does not exist in db`);
  }
  if ("name" in card) {
    user.name = card.name;
  }
  if ("card" in card) {
    user.card = card.card;
  }
  await user.save();
  return Promise.resolve({
    success: true,
    message: `${user.name} has been updated successfully`,
  });
};

exports.deleteCard = async (id) => {
  const user = await db.Loteria.findByPk(id);
  if (!user) {
    throw new Error(`${card.name} does not exist in db`);
  }
  await usuario.destroy();
  return Promise.resolve({
    success: true,
    message: "User with ${id} has been delete it",
  });
};

exports.auth = ({ username, password }) => {
  if (username !== "admin" && password !== "puroteaminfierno") {
    return { success: false, message: "Username or password are not correct" };
  }
  return { success: true, token: "LoteriaAuth" };
};
