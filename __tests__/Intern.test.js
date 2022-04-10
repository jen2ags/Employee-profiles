const Intern = require('../lib/Intern.js');

const intern = new Intern('Janice', '987654321', 'janice@gmail.com', 'UTSA');

test('creates a new intern object', () => {

    expect(intern.name).toBe('Janice');
    expect(intern.id).toBe('987654321');
    expect(intern.email).toBe('janice@gmail.com');
    expect(intern.school).toBe('UTSA');
});

test('to see if we can get the name from the getName()', () => {
    expect(intern.getName()).toBe('Janice');
});

test('to see if we can get the id number from getId()', () => {
    expect(intern.getId()).toBe('987654321');
});

test('to see if we can get the email address from getEmail()', () => {
    expect(intern.getEmail()).toBe('janice@gmail.com');
});

test("to see if we can get the intern's school from getSchool()", () => {
    expect(intern.getSchool()).toBe('UTSA');
});

test('to see if we can get the role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});