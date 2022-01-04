const Exercise =  require('./Exercise');
const { ObjectID } = require('bson');

class ExerciseBuilder {

    constructor() {

        this.username = undefined;
        this.description = undefined;
        this.duration = undefined;
        this.date = undefined;
        this.id = new ObjectID();
    }

    withUser(user) {
        this.username = user.username;
        this.id = user._id;
        return this;
    }

    withDescription(description) {

        this.description = description;
        return this;
    }

    withDuration(duration) {

        this.duration = Number(duration);
        return this;
    }

    withDate(date) {

        this.date = date;
        return this;
    }

    build() {

        return new Exercise({
            username: this.username,
            description: this.description,
            duration: this.duration,
            date: this.date,
            id: this.id
        })
    }
}

module.exports = ExerciseBuilder;