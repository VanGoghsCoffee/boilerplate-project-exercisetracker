const Log = require('./Log');

class LogBuilder {

    constructor() {

        this.username = undefined;
        this.id = undefined;
    }

    withUser(user) {

        this.username = user.username;
        this.id = user._id;
        return this;
    }

    build() {

        return new Log({
            username: this.username,
            id: this.id
        });
    }
}

module.exports = LogBuilder;