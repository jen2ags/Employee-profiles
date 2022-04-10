const Manager = require('../lib/Manager.js');

const manager = new Manager('Janice', '987654321', 'janice@gmail.com', '123');


test('creates a new manager object', () => {

    expect(manager.name).toBe('Janice');
    expect(manager.id).toBe('987654321');
    expect(manager.email).toBe('janice@gmail.com');
    expect(manager.officeNumber).toBe('123');
});

test('to see if we can get the name from the getName()', () => {
    expect(manager.getName()).toBe('Janice');
});

test('to see if we can get the id number from getId()', () => {
    expect(manager.getId()).toBe('987654321');
});

test('to see if we can get the email address from getEmail()', () => {
    expect(manager.getEmail()).toBe('janice@gmail.com');
});

test('to see if we can ge the office number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('123');
});

test('to see if we can get the role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});