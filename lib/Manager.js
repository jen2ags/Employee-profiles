class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    officeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;