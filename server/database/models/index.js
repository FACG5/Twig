const connection = require('../config');
const users = require('./users');
const languages = require('./languages');
const dialect = require('./dialect');
const translations = require('./translations');
const typesOfTranslations = require('./typesOTranslations');
const questions = require('./question');
const speclalizations = require('./speclalizations');
const employeeSkills = require('./employeeSkills');
const skills = require('./skills');
const jobs = require('./jobs');
const votes = require('./vote');


languages.hasMany(users, { foreignKey: 'language_id' });
languages.hasMany(dialect, { foreignKey: 'language_id' });
dialect.hasMany(users, { foreignKey: 'dialect_id' });
typesOfTranslations.hasMany(translations, { foreignKey: 'type_id' });
languages.hasMany(translations, { foreignKey: 'language_id' });
dialect.hasMany(translations, { foreignKey: 'dialect_id' });
users.hasMany(translations, { foreignKey: 'owner' });
questions.hasMany(translations, { foreignKey: 'question_id' });
users.hasMany(questions, { foreignKey: 'owner' });
speclalizations.hasMany(questions, { foreignKey: 'speclalization_id' });
jobs.hasMany(users, { foreignKey: 'job_id' });
users.hasMany(employeeSkills, { foreignKey: 'user_id' });
skills.hasMany(employeeSkills, { foreignKey: 'skill_id' });
users.hasMany(votes, { foreignKey: 'user_id' });
translations.hasMany(votes, { foreignKey: 'translations_id' });


module.exports = {
  connection,
  users,
  languages,
  questions,
  speclalizations,
  dialect,
  typesOfTranslations,
};
