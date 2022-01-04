class Exercise {

    constructor({ username, description, duration, date, id }) {

        this.username = username;
        this.description = description;
        this.duration = duration;
        this.date = date;
        this._id = id;
    }
}

module.exports = Exercise;