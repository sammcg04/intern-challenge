# Coding Challenge: "Simple CSV Reader and CRUD API with Node.js

Read Data from a CSV File</br>
RESTful API endpoints</br>
Data Validation

## About

In this task I had to develop a basic RESTful API to get data from a CSV File and validate that it was all in correct format based off of the inputted user id.


### Content Locations
- `internchallenge_sammcgrath`: the folder containing all files.
- `index.js`: my js file containing the code.
- `data.csv`: my sample CSV file.


### Tech used
- Node.js
- Express.js
- csv-parser
- Nodemon


## Setup Information

### Terminal inputs:
Ensure you run: ``` npm install ``` to install all dependencies required from the package.json<br/>
To start the server run: ``` npm start ``` this will run the server at `http://localhost:5000`.


## Endpoint Testing

For testing endpoints I use Postman. Within the application I tested the following:

- GET `http://localhost:5000/employees` - accessing all employee data.
- GET `http://localhost:5000/employees/2` - accessing data from the employee with the id '2'.
- GET `http://localhost:5000/employees/4` - Ensure negative salary logic works.
- GET `http://localhost:5000/employees/5` - Ensure email verification logic works.


## References
Sources used to help research:
- [w3schools](https://www.w3schools.com/nodejs/)
- [geeksforgeeks](https://www.geeksforgeeks.org/javascript-regexpregular-expression/)





