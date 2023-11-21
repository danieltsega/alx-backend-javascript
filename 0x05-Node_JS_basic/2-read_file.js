const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');
    const lines = fileContent.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines
      .map((line) => line.split(','))
      .filter((student) => student.length === 4);

    const csStudents = students.filter((student) => student[3] === 'CS');
    const sweStudents = students.filter((student) => student[3] === 'SWE');

    const csCount = csStudents.length;
    const sweCount = sweStudents.length;
    const totalStudents = csCount + sweCount;

    const csList = csStudents.map((student) => student[0]).join(', ');
    const sweList = sweStudents.map((student) => student[0]).join(', ');

    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csList}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweList}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
