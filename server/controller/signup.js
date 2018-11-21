const bcryptjs = require('bcryptjs');
const snakeCase = require('snakecase-keys');
const { users, employeeSkills } = require('../database/models');

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
              location: 'Not Specified',
              gender: 'Not Specified',
              DateOfRegiste: new Date(),
              jobId: jobTitle,
            };
            userData = snakeCase(userData);
            const userResult = await users.create(userData);
            const { id } = userResult.dataValues;
            skills.map(async (skill) => {
              let employeeSkillsData = { userId: id, skillId: skill.id };
              employeeSkillsData = snakeCase(employeeSkillsData);
              await employeeSkills.create(employeeSkillsData);
            });
            response.status(200).send('Successfule signup, you can login now');
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
