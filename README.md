# SynopticProject

## Available Scripts

In this project directory, you can run:

## `npm run start-api`

Runs the app in the development mode.<br />
Open [http://localhost:3001/] (http://localhost:3001/) to view it in the browser

The page will reload if you make edits. <br />
You will also see any lint errors in the console.


The first time you open the project run npm install 

This will install all of the dependecies and make it possible to run up the app.

## Feature branches
Feature branches are triggered by any branch name start with feature (i.e. feature/SP-144_testing).
Feature braches are deployed to there own container so can be tested in isolation.

## Develop branch 
Merging code into this branch should be done via a Pull Request and after has been compled on the feature branch.

To run this project you have to have the following running in the terminal:

## mongod
this is the primary daemon process for the MongoDB system. it handles the data request, manages data access and performs background managemnt operations.

## npm run start-api

Runs the app in the development mode.<br />
Open [http://localhost:3001/] (http://localhost:3001/) to view it in the browser

The page will reload if you make edits. <br />
You will also see any lint errors in the console.


## Postman 

To test the end points you will need Postman.

To test the endpoint load up Postman and create a new request 
i.e. 
1. POST request use the url http://localhost:3001/
2. in the request body fill in the details from the schema as a JSON object
	i,e
	{
		"cardId": "1w2e3r4t5y6u7i910",
		"employeeId": "5689",
		"name": "Bob Jones",
		"email": "james.cadden@one.com",
		"mobileNumber": "07795505446",
		"pin": "4578",
		"balance": "£22.00"
	}
3. Press send with this request you should get a message saying "Successfully added employee"
4. For the other request use the following URL's:
GET Requst use http://localhost:3001/employees - this will get all employees

GET request use http://localhost:3001/employees/:cardId - pass in an card id this will return a single employee

PUT requst use http://localhost:3001/employees/:employeeId - pass in an employee id this will get a single employee fill in the request body as per the POST request with any changes that you would like to make to the employee

DELETE request use http://localhost:3001/employees/:employeeId -  pass in an employee id this will delete a single employee with that employee id.
    


