const sequelize = require('../config/index');

const getSpeclalizations = async () => {
  const speclalization = await sequelize.query(
    'select count(questions.id), speclalizations.* from speclalizations left join questions ON questions.speclalization_id = speclalizations.id GROUP BY speclalizations.id',
  );
  return speclalization;
};
module.exports = getSpeclalizations;
