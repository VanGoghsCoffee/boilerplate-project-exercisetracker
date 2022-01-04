const User = require('./User');
const { ObjectID } = require('bson');

class UserBuilder {

    constructor() {

        this.username = undefined;
        this.id = new ObjectID();
    }

    withUsername(username) {

        this.username = username;
        return this;
    }

    build() {

        return new User({
            username: this.username,
            id: this.id
        });
    }
}

module.exports = UserBuilder;