// Write your solution in this file!


//define an `employee` variable and assign it to an `Object` containing
// `name` and `streetAddress` keys

const employee = {
    name: 'employeeName',
    streetAddress: 'employeeStreetAddress',
};

// updateEmployeeWithKeyAndValue(employee, key, value)
// 1) "before each" hook for "returns an employee with the original key value pairs and the new key value pair"

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key] : value}
}

// destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
// 2) updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

// deleteFromEmployeeByKey(employee, key)
// 3) deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
// 4) does not modify the original employee (it is non-destructive)

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
}

// destructivelyDeleteFromEmployeeByKey(employee, key)
// 5) returns employee without the deleted key/value pair
// 6) modifies the original employee

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}