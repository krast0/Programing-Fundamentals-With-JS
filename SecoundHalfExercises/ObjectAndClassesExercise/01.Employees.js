function employees(array) {
    let employees = {}
    for (let employee of array) {
        employees.name = employee
        employees.length = employee.length
        console.log(`Name: ${employees.name} -- Personal Number: ${employees.length}` );
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )