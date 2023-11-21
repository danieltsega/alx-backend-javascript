const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      // Your logic to fetch and process the data from the database goes here
      const data = await readDatabase('./database.csv');
      // Your logic to send the response goes here
      response.status(200).send('Implementation for getAllStudents');
    } catch (error) {
      response.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      // Your logic to fetch and process the data from the database goes here
      const data = await readDatabase('./database.csv');
      // Your logic to send the response goes here
      response.status(200).send('Implementation for getAllStudentsByMajor');
    } catch (error) {
      response.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }
}

module.exports = StudentsController;
