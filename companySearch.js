const companySearch = {};

// Method for locate command
companySearch.locate = (companyData, arg) => {
  const output = [];

  companyData.forEach((company) => {
    if (company.state === arg) {
      output.push(company.company_name);
    }
  });

  return output;
};

// Method for find_before command
companySearch.find_before = (companyData, arg) => {
  const output = [];

  companyData.forEach((company) => {
    if (company.year_founded <= parseInt(arg)) {
      output.push(company.company_name);
    }
  });

  return output;
};

// Method for find_after command
companySearch.find_after = (companyData, arg) => {
  const output = [];

  companyData.forEach((company) => {
    if (company.year_founded >= parseInt(arg)) {
      output.push(company.company_name);
    }
  });

  return output;
};

// Method for find_companies_between_size command
companySearch.find_companies_between_size = (companyData, arg) => {
  const output = [];

  companyData.forEach((company) => {
    if (company.full_time_employees === arg) {
      output.push(company.company_name);
    }
  });

  return output;
};

// Method for find_type command
companySearch.find_type = (companyData, arg) => {
  const output = [];

  companyData.forEach((company) => {
    if (company.company_category === arg) {
      output.push(company.company_name);
    }
  });

  return output;
};

// Method for logging data to the console
companySearch.logResults = (validCompanies, command, arg) => {
  if (validCompanies.length === 0) {
    console.log(`There are no results for the command: '${command}', and argument: '${arg}', please try again.`);
  } else {
    console.log(`Company Names: \n${validCompanies.join(', ')}\n\nNumber of Companies: ${validCompanies.length}`);
    return null;
  }
};

// Routing logic for commands
companySearch.router = (companyData, command, arg) => {
  if (command === 'locate') {
    companySearch.logResults(companySearch.locate(companyData, arg), command, arg);
  } else if (command === 'find_before') {
    companySearch.logResults(companySearch.find_before(companyData, arg), command, arg);
  } else if (command === 'find_after') {
    companySearch.logResults(companySearch.find_after(companyData, arg), command, arg);
  } else if (command === 'find_companies_between_size') {
    const validSizeArgs = ['1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+'];

    if (validSizeArgs.includes(arg)) {
      companySearch.logResults(companySearch.find_companies_between_size(companyData, arg), command, arg);
    } else {
      console.log(`Invalid argument, please try again using on of the following arguments: \n${validSizeArgs.join('\n')}`);
      return null;
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
      companySearch.logResults(companySearch.find_type(companyData, arg), command, arg);
    } else {
      console.log(`Invalid argument, please be sure to include the argument in quotes and try again using on of the following arguments: \n${validTypeArgs.join('\n')}`);
      return null;
    }
  } else {
    console.log('Invalid command, please try again using on of the following commands: \nlocate\nfind_before\nfind_after\nfind_companies_between_size\n');
    return null;
  }
};

module.exports = companySearch;
