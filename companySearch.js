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

	logResults(output);
}

//Function for find_before command
var find_before = (arg) => {
	var output = [];

	companyData.forEach((company) => {
		if (company.year_founded <= parseInt(arg)) {
			output.push(company.company_name);
		}
	});

	logResults(output);
}

//Function for find_after command
var find_after = (arg) => {
	var output = [];

	companyData.forEach((company) => {
		if (company.year_founded >= parseInt(arg)) {
			output.push(company.company_name);
		}
	});

	logResults(output);
}

//Function for find_companies_between_size command
var find_companies_between_size = (arg) => {
	var output = [];

	companyData.forEach((company) => {
		if (company.full_time_employees === arg) {
			output.push(company.company_name);
		}
	});

	logResults(output);
}

//Function for find_type command
var find_type = (arg) => {
	var output = [];

	companyData.forEach((company) => {
		if (company.company_category === arg) {
			output.push(company.company_name);
		}
	});

	logResults(output);
}

//Function for logging data to the console
var logResults = (validCompanies) => {
	if (validCompanies.length === 0) {
		console.log("There are no results for the command: '" + command + "', and argument: '" + arg + "', please try again.");
	} else {
		console.log('Company Names: \n' + validCompanies.join(', ') + '\n\nNumber of Companies: ' + validCompanies.length);
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
	const validSizeArgs = ['1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+'];

	if (validSizeArgs.includes(arg)) {
		find_companies_between_size(arg);
	} else {
		console.log("Invalid argument, please try again using on of the following arguments: \n" + validSizeArgs.join('\n'));
	}
} else if (command === 'find_type') {
	const validTypeArgs = ['N/A',
												 'Aerospace and Defense',
												 'Business & Legal Services',
												 'Data/Technology',
												 'Education',
												 'Energy',
												 'Environment & Weather',
												 'Finance & Investment',
												 'Food & Agriculture',
												 'Geospatial/Mapping',
												 'Governance',
												 'Healthcare',
												 'Housing/Real Estate',
												 'Insurance',
												 'Lifestyle & Consumer',
												 'Media',
												 'Research & Consulting',
												 'Scientific Research',
												 'Transportation'];

	if (validTypeArgs.includes(arg)) {
		find_type(arg);
	} else {
		console.log("Invalid argument, please be sure to include the argument in quotes and try again using on of the following arguments: \n" + validTypeArgs.join('\n'));
	}
} else {
	console.log("Invalid command, please try again using on of the following commands: \nlocate\nfind_before\nfind_after\nfind_companies_between_size\n")
}















