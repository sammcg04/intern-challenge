const express = require('express');
const fs = require('fs');
const csvParser = require('csv-parser');

const app = express();
const port = 5000;
let employees = [];

// Function to load CSV data into memory
function loadCSVData() {
    fs.createReadStream('data.csv')
        .pipe(csvParser())
        .on('data', (row) => {
            employees.push(row);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
}

// Load CSV data on server start
loadCSVData();

// RESTful API Endpoints

// Get all employees
app.get('/employees', getall(req, res));

//email validation regex (anything + @ + anything + . + anything)
let regexp = /\S+@\S+\.\S+/;

// Get employee by ID

app.get('/employees/:id', (req, res) => {
    const employee = employees.find(emp => emp.id == req.params.id);
    if ( !employee.name || !employee.email || !regexp.test(employee.email)  || !employee.position || !employee.salary || employee.salary <= 0) {
        return res.status(400).json({ error: 'Invalid data' });
    }else{
        res.json(employee);
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.export= (employees);