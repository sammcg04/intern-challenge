import express from 'express';
import fs from 'fs';
import csvParser from 'csv-parser';

const app = express();
const port = 5000;
let employees = []; //array for storing in memory

// Function to load CSV data into memory
function loadCSVData() {
    fs.createReadStream('data.csv')//reading stream
        .pipe(csvParser())
        .on('data', (row) => {
            employees.push(row);
        })
        .on('end', () => {
            //if successful print in the console:
            console.log('CSV file successfully processed');
        });
}

// Load CSV data on server start
loadCSVData();

// RESTful API Endpoints

// Get all employees
app.get('/employees', (req, res) => {
    res.json(employees); //data in jsoon format
});

//email validation regex (anything + @ + anything + . + anything)
let regexp = /\S+@\S+\.\S+/;

// Get employee by ID
app.get('/employees/:id', (req, res) => {
    const employee = employees.find(emp => emp.id == req.params.id);
    if ( !employee.name || !employee.email || !regexp.test(employee.email)  || !employee.position || !employee.salary || employee.salary <= 0) {
        return res.status(400).json({ error: 'Invalid data' });//logic to give any invalide data
    }else{
        res.json(employee);//if data is all correct give the employee info in json format
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
