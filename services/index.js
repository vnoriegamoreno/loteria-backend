const db = require('../models');

exports.getCards = () => {
  return db.Loteria.findAll().then((cards) => ({ success: true, data: cards })).catch((e) => { throw new Error(e); });
};

// TODO: verify card details
exports.createCard = (card) => {
  return db.Loteria.create(card).then((c) => ({ success: true, data: c })).catch((e) => { throw new Error(e); });
};

exports.updateCard = (card) => {
  return Promise.resolve({ success: true });
};

exports.deleteCard = (id) => {
  return Promise.resolve({ success: true });
}
