const fs = require('fs');
const companySearch = require('./companySearch');

const args = process.argv.slice(2);
const filePath = args[0];
const command = args[1];
const arg = args[2];

const companyData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Call Router to route logic to proper function
companySearch.router(companyData, command, arg);
