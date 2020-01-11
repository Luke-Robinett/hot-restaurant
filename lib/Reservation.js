class Reservation {
    constructor(name, phoneNumber, email, id) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getNumber() {
        return this.phoneNumber;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
}

module.exports = Reservation;