const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Janice', '987654321', 'janice@gmail.com');

test('creates a new employee object', () => {

    expect(employee.name).toBe('Janice');
    expect(employee.id).toBe('987654321');
    expect(employee.email).toBe('janice@gmail.com');
});

test('to see if we can get the name from the getName()', () => {
    expect(employee.getName()).toBe('Janice');
});

test('to see if we can get the id number from getId()', () => {
    expect(employee.getId()).toBe('987654321');
});

test('to see if we can get the email address from getEmail()', () => {
    expect(employee.getEmail()).toBe('janice@gmail.com');
});

test('to see if we can get the role from getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});