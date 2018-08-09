var fs = require('fs');

const args = process.argv.slice(2);


//Reads the json file and passes the data, command, and argument to a routing function
fs.readFile(args[0], function(err, data) {

	const companyData = data;
	route(companyData, args[1], args[2]);
});

//Routing logic for commands
let route = (data, command, arg) => {
	if (command === 'locate') {
		console.log(data.length);
	} else if (command === 'find_before') {

	} else if (command === 'find_after') {

	} else if (command === 'find_companies_between_size') {

	} else {
		console.log("Invalid command, please try again using on of the following commands: \nlocate\nfind_before\nfind_after\nfind_companies_between_size\n")
	}
}
