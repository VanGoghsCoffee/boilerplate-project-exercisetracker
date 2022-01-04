class UserCollection {

    constructor() {

        this.users = [];
    }

    save(user) {

        this.users.push(user);
    }

    getAll() {

        return this.users;
    }

    findById(id) {

        return this.users.filter( user => user._id  == id);
    }
}

const userCollection = new UserCollection();

module.exports = userCollection;