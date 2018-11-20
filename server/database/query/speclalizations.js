const Speclalizations = require('../models/speclalizations');

const getSpeclalizations = async () => {
  const speclalization = await Speclalizations.findAll();
  const specialty = speclalization.map(element => element.dataValues);
  return specialty;
};
module.exports = getSpeclalizations;
