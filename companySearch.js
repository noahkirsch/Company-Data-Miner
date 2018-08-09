var fs = require('fs');

const args = process.argv.slice(2);
const filePath = args[0];
const command = args[1];
const arg = args[2];

const companyData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

//Function for locate command
var locate = (arg) => {
	var output = [];

	companyData.forEach((company) => {
		if (company.state === arg) {
			output.push(company.company_name);
		}
	});

	if (output.length === 0) {
		console.log("There are no results for the command: '" + command + "', and argument: '" + arg + "', please try again.");
	} else {
		console.log('Company Names: \n' + output.join(', ') + '\n\nNumber of Companies: ' + output.length);
	}
}

//Function for find_before command
var find_before = (arg) => {
	var output = [];

	companyData.forEach((company) => {
		if (company.year_founded <= parseInt(arg)) {
			output.push(company.company_name);
		}
	});

	if (output.length === 0) {
		console.log("There are no results for the command: '" + command + "', and argument: '" + arg + "', please try again.");
	} else {
		console.log('Company Names: \n' + output.join(', ') + '\n\nNumber of Companies: ' + output.length);
	}
}

//Function for find_after command
var find_after = (arg) => {
	var output = [];

	companyData.forEach((company) => {
		if (company.year_founded >= parseInt(arg)) {
			output.push(company.company_name);
		}
	});

	if (output.length === 0) {
		console.log("There are no results for the command: '" + command + "', and argument: '" + arg + "', please try again.");
	} else {
		console.log('Company Names: \n' + output.join(', ') + '\n\nNumber of Companies: ' + output.length);
	}
}

//Routing logic for commands
if (command === 'locate') {
	locate(arg);
} else if (command === 'find_before') {
	find_before(arg);
} else if (command === 'find_after') {
	find_after(arg);
} else if (command === 'find_companies_between_size') {

} else if (command === 'find_type') {

} else {
	console.log("Invalid command, please try again using on of the following commands: \nlocate\nfind_before\nfind_after\nfind_companies_between_size\n")
}

