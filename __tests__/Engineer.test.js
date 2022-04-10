const Engineer = require('../lib/Engineer.js');

const engineer = new Engineer('Janice', '987654321', 'janice@gmail.com', 'janicecoolcat');

test('creates a new engineer object', () => {

    expect(engineer.name).toBe('Janice');
    expect(engineer.id).toBe('987654321');
    expect(engineer.email).toBe('janice@gmail.com');
    expect(engineer.github).toBe('janicecoolcat');
});

test('to see if we can get the name from the getName()', () => {
    expect(engineer.getName()).toBe('Janice');
});

test('to see if we can get the id number from getId()', () => {
    expect(engineer.getId()).toBe('987654321');
});

test('to see if we can get the email address from getEmail()', () => {
    expect(engineer.getEmail()).toBe('janice@gmail.com');
});

test("to see if we can get the engineer's github username from getGithub()", () => {
    expect(engineer.getGithub()).toBe('janicecoolcat');
});

test('to see if we can get the role from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});