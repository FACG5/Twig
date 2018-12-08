const bcryptjs = require('bcryptjs');
const snakeCase = require('snakecase-keys');
const { users, employeeSkills } = require('../database/models');

exports.checkEmail = async (request, response) => {
  try {
    const { email } = request.headers;
    const emailResult = await users.findOne({ where: { email }, raw: true });
    if (emailResult) {
      response.status(400).send('email is already exist !');
    } else {
      response.status(200).send('valid Email');
    }
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};

exports.post = async (request, response) => {
  try {
    const {
      skills,
      firstName,
      lastName,
      email,
      password,
      language,
      dialect,
      jobTitle,
      otherSkills,
    } = request.body;
    if (
      firstName
      && lastName
      && email
      && password
      && language
      && dialect
      && jobTitle
    ) {
      bcryptjs.hash(password, 10, async (err, hash) => {
        if (err) {
          response.status(500).send('Server Error !');
        } else {
          try {
            let userData = {
              firstName,
              lastName,
              password: hash,
              email,
              otherSkills,
              DateOfRegiste: new Date(),
              jobId: jobTitle,
              languageId: language,
              dialectId: dialect,
            };
            userData = snakeCase(userData);
            const userResult = await users.create(userData);
            const { id } = userResult.dataValues;
            skills.map(async (skill) => {
              let employeeSkillsData = { userId: id, skillId: skill.id };
              employeeSkillsData = snakeCase(employeeSkillsData);
              await employeeSkills.create(employeeSkillsData);
            });
            response.status(200).send('Successful Signup, You Can Login Now !');
          } catch (error) {
            response.status(500).send('Internal Server Error !');
          }
        }
      });
    } else {
      response.status(401).send('Fill all the fileds, please !');
    }
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};
