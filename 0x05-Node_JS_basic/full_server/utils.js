const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    // Your logic to process the file content and return an object of arrays
    // of the firstname of students per fields goes here
    return processedData;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase };
