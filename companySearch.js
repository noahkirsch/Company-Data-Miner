const args = process.argv.slice(2);

if (args[1] === 'locate') {

} else if (args[1] === 'find_before') {

} else if (args[1] === 'find_after') {

} else if (args[1] === 'find_companies_between_size') {

} else {
	console.log("Invalid Command, please try again using on of the following commands: locate\nfind_before\nfind_after\nfind_companies_between_size\n")
}