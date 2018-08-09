# Company-Data-Miner

## Installation and Instructions for Use

**This program uses Node.js and NPM**

To install Node.js, visit this link:

```
> https://nodejs.org/en/download/

```

To install NPM, use the command:

```
> npm install npm@latest -g

```

To run the program, use the following command in the terminal:

```
> node index.js <JSON File> <Command> <Argument>

```

#Supported Commands:

**1. locate**

```
> node index.js <JSON File> locate <State Abbreviation>

```

Example:

```
> node index.js data.json locate CA

```

**2. find_before**

```
> node index.js <JSON File> find_before <Year>

```

Example:

```
> node index.js data.json find_before 2000

```

**3. find_after**

```
> node index.js <JSON File> find_after <Year>

```

Example:

```
> node index.js data.json find_after 2000

```

**4. find_companies_between_size**

```
> node index.js <JSON File> find_companies_between_size <Size>
```

Example:

```
> node index.js data.json find_companies_between_size '1-10'

```

* Note only the following are supported arguments for company size, quotations must be used around the argument:

```
['1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+']
```

**5. find_type**

```
> node index.js <JSON File> find_type <Type>

```

Example:

```
> node index.js data.json find_type 'Data/Technology'

```

* Note only the following are supported arguments for company type, quotations must be used around the argument:

```
[’N/A’,
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
 'Transportation']```
 ```

## Testing
	
This program uses the Mocha testing library. To install, use the command:

```
> npm install mocha

```


The test file can be run in the terminal using the command:

```
> mocha tests.js

```	

## Assumptions

This program works under the assumption that the json file is provided in the following format. If it is not in this format the program will not run appropriately. 

```javscript
[
  {
    "company_name_id": "3-round-stones-inc",
    "company_name": "3 Round Stones, Inc.",
    "url": "http://3RoundStones.com",
    "year_founded": 2010,
    "city": "Washington",
    "state": "DC",
    "country": "us",
    "zip_code": 20004,
    "full_time_employees": "1-10",
    "company_type": "Private",
    "company_category": "Data/Technology",
    "revenue_source": "Data analysis for clients, Database licensing, Subscriptions",
    "business_model": "Business to Business, Business to Consumer",
    "social_impact": "",
    "description": "3 Round Stones produces a platform for publishing data on the Web. 3 Round Stones provides commercial support for the Callimachus Data Platform, used by the Fortune 2000 and US Government Agencies publishing and consuming data.  Headquartered in Arlington, Virginia, we're seasoned entrepreneurs who are passionate about solving real world problems through open data and open Web standards.",
    "description_short": "Our Open Source platform is used by the Fortune2000 and US Government Agencies to collect, publish and reuse data, both public and proprietary.",
    "source_count": "NA",
    "data_types": "",
    "example_uses": "",
    "data_impacts": "[]",
    "financial_info": "3 Round Stones is a profitable, self-funded, woman-owned start-up.  Our team has several successful serial entrepreneurs.  As entrepreneurs, we've benefited from the valuable guidance by seasoned advisers and mentors in the mid-Atlantic region who have guided our team through multiple start-ups, outside funding and an acquisition by a Fortune 100 company in 2005.",
    "last_updated": "2014-11-12 14:44:25.969871"
  }
 ]
```

## Design Overview

The index.js file parses command line arguments and passes the data, command, and argument to a routing function.

The routing function tests that valid json files, commands, and arguments have been provided. If an appropriate json file, command, and argument has been provided, the routing function passes the data and argument to the appropriate companySearch method, which will then search the JSON file to find the queried data. If appropriate parameters were not provided, the routing function will return an error and give guidance on what valid commands and arguments are.

Each command method in companySearch.js will search through the provided data, and valid companies will be pushed to an output array. When the data search has been completed, the output array is passed to the logResults method, which will either log all of the results and the total number of companies found, or a message that no companies have been found.

## Future Improvements

The main improvement I would make to this program if I knew that the same data was to be queried several times, I would consider inserting the data into a database for faster query times.

Specifically, MongoDB supports the insertion of JSON files, and would be an easy way to insert a large amount of data without much trouble.

Another improvement I would make with more time would be to allow for a user to query more properties, such as search for keywords in the description. This functionality would make the program more robust and would give it more usability.
